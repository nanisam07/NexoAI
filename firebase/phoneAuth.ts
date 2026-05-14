import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

import { auth } from "./config";

let confirmationResult: any;

export const sendOTP =
  async (phone: string) => {

    try {

      // CREATE RECAPTCHA ONLY ONCE

      if (
        !(window as any).recaptchaVerifier
      ) {

        (window as any).recaptchaVerifier =
          new RecaptchaVerifier(
            auth,
            "recaptcha-container",
            {
              size: "invisible",
            }
          );
      }

      const appVerifier =
        (window as any)
          .recaptchaVerifier;

      // ADD COUNTRY CODE

      const formattedPhone =
        `+91${phone}`;

      confirmationResult =
        await signInWithPhoneNumber(
          auth,
          formattedPhone,
          appVerifier
        );

      return confirmationResult;

    } catch (error) {

      console.log(error);

      throw error;
    }
  };

export const verifyOTP =
  async (otp: string) => {

    try {

      if (!confirmationResult) {

        throw new Error(
          "OTP session expired"
        );
      }

      const result =
        await confirmationResult.confirm(
          otp
        );

      return result.user;

    } catch (error) {

      console.log(error);

      throw error;
    }
  };
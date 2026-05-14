import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

import { auth } from "./config";

declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
  }
}

export const setupRecaptcha = () => {

  if (!window.recaptchaVerifier) {

    window.recaptchaVerifier =
      new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
        }
      );
  }
};

export const sendOTP = async (
  phone: string
) => {

  setupRecaptcha();

  const appVerifier =
    window.recaptchaVerifier;

  const confirmationResult =
    await signInWithPhoneNumber(
      auth,
      `+91${phone}`,
      appVerifier
    );

  window.confirmationResult =
    confirmationResult;
};

export const verifyOTP = async (
  otp: string
) => {

  return await window.confirmationResult.confirm(
    otp
  );
};
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth } from "./config";

const provider = new GoogleAuthProvider();

export const googleLogin = async () => {

  try {

    const result = await signInWithPopup(
      auth,
      provider
    );

    return result.user;

  } catch (error) {

    console.log(error);

  }
};

export const logout = async () => {
  await signOut(auth);
};
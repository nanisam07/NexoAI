import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "./config";

const provider =
  new GoogleAuthProvider();

export const googleLogin =
  async () => {

    return await signInWithPopup(
      auth,
      provider
    );
  };
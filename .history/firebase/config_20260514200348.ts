// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getauth } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzIg3TIqaNuI8ABUp6Bv1sztpzCl63viw",
  authDomain: "nexora-ai-v2.firebaseapp.com",
  projectId: "nexora-ai-v2",
  storageBucket: "nexora-ai-v2.firebasestorage.app",
  messagingSenderId: "362634539034",
  appId: "1:362634539034:web:95b1dbe79b7f9f5216a1a3",
  measurementId: "G-YCH6HLSE59"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const auth = getauth(app);
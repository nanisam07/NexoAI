// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-rImdzrXNi-Bh0jHZ2e5aJ1K1aeIThaA",
  authDomain: "nexora-ai-d42a5.firebaseapp.com",
  projectId: "nexora-ai-d42a5",
  storageBucket: "nexora-ai-d42a5.firebasestorage.app",
  messagingSenderId: "946672231517",
  appId: "1:946672231517:web:1750e5d3e7516da4b519b4",
  measurementId: "G-6KZV6SN2KH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkXmgJNuBTDhS-rvWfyJcj6IKDbFyXwIA",
  authDomain: "gwallet-180a9.firebaseapp.com",
  projectId: "gwallet-180a9",
  storageBucket: "gwallet-180a9.firebasestorage.app",
  messagingSenderId: "619645557243",
  appId: "1:619645557243:web:29d16f9321fc21fee1135e",
  measurementId: "G-PQL92SNQ4H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const analytics = getAnalytics(app);
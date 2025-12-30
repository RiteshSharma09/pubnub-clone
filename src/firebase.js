import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_rugT7goe5kUWwCwJqa1j3MQKQ3CWcJ0",
  authDomain: "meeting-app-9f58e.firebaseapp.com",
  projectId: "meeting-app-9f58e",
  storageBucket: "meeting-app-9f58e.firebasestorage.app",
  messagingSenderId: "1077155841642",
  appId: "1:1077155841642:web:bfd8d52d5caef8c56e6c13",
  measurementId: "G-45Q2Y5PTHL"
};

const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);

// ✅ Google Provider
export const googleProvider = new GoogleAuthProvider();

// Firestore
export const db = getFirestore(app);

export default app;
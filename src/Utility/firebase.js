// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// importing need functions to use in our projects

// getauth used to verifiy is the user sign in or out
import { getAuth } from "firebase/auth";

// getfirestour used to store users order data
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// exporting firebase functions to use what ever wanted place

export const auth = getAuth(app);
export const db = getFirestore(app);

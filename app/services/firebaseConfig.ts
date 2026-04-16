import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXgHYrdXhjtfSq-yjVc0iov8GqKPgI7Io",
  authDomain: "projeto-login-5867e.firebaseapp.com",
  projectId: "projeto-login-5867e",
  storageBucket: "projeto-login-5867e.firebasestorage.app",
  messagingSenderId: "722797624403",
  appId: "1:722797624403:web:bae224669624aebd269aa6",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

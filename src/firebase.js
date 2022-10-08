
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage}  from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDi9bMYK3wTeMpov3L473Gv69bJSp_uhJo",
  authDomain: "convo-a4db2.firebaseapp.com",
  projectId: "convo-a4db2",
  storageBucket: "convo-a4db2.appspot.com",
  messagingSenderId: "600853879866",
  appId: "1:600853879866:web:c2d63f9f22e124c64fa903",
  measurementId: "G-KH50XD35CZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuwxD8UQZQdnwpGNQ1lzU-rIbVz9VmMaE",
  authDomain: "twitter-ad2ca.firebaseapp.com",
  projectId: "twitter-ad2ca",
  storageBucket: "twitter-ad2ca.appspot.com",
  messagingSenderId: "29259865987",
  appId: "1:29259865987:web:975dbd2aad3a0080eb20b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth referansını al
export const auth = getAuth(app);

// google sağlayıcısını kur
export const provider = new GoogleAuthProvider();

// veritabanın referansını al
export const db = getFirestore(app);

// storage referansını al
export const storage = getStorage(app);
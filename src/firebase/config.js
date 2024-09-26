// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_Bbv6jc0mLnFaIN2-5PqhJ5ikzvLKguU",
  authDomain: "twitter-2c527.firebaseapp.com",
  projectId: "twitter-2c527",
  storageBucket: "twitter-2c527.appspot.com",
  messagingSenderId: "194873674942",
  appId: "1:194873674942:web:fd34142c8de80ff12362ef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth hizmetinin referansını al
export const auth = getAuth(app);

// (google) provider kurulumu
export const provider = new GoogleAuthProvider();

// veritabanının referansını alma
export const db = getFirestore(app);

// medya depolama alanının referansını alma
export const storage = getStorage(app);

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

import { getAuth } from "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB5kN9BmoXnJLBozGf_gyw5EAtnE0KT3kQ",
  authDomain: "qrcode-c6f21.firebaseapp.com",
  databaseURL:
    "https://qrcode-c6f21-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "qrcode-c6f21",
  storageBucket: "qrcode-c6f21.appspot.com",
  messagingSenderId: "369629935562",
  appId: "1:369629935562:web:8a71c3790db58493f90133",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);
export { addDoc, db, collection, auth };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlJ8_8rawwqIV9zWALIHvCoZkG8bcd4RM",
  authDomain: "trips-df7d3.firebaseapp.com",
  projectId: "trips-df7d3",
  storageBucket: "trips-df7d3.appspot.com",
  messagingSenderId: "208138057594",
  appId: "1:208138057594:web:ef0321c21fb230428948c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
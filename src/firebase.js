// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // اضافه شده

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxO2Hk0BX2801It59kRM-YtCnz1Z8KfK4",
  authDomain: "bookstore-a4669.firebaseapp.com",
  databaseURL: "https://bookstore-a4669-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bookstore-a4669",
  storageBucket: "bookstore-a4669.firebasestorage.app",
  messagingSenderId: "75647111672",
  appId: "1:75647111672:web:bb0b21c46cb635938dc60d",
  measurementId: "G-H6K5CY9EXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and export db
export const db = getFirestore(app);

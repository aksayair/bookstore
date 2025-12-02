// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
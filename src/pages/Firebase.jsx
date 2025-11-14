// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApOHhlzrmkdCAUpIi_NQqduvWO6I1VAgg",
  authDomain: "food-recipee-9c8c1.firebaseapp.com",
  projectId: "food-recipee-9c8c1",
  storageBucket: "food-recipee-9c8c1.firebasestorage.app",
  messagingSenderId: "555483172013",
  appId: "1:555483172013:web:151f9d558b2e1886c30a24",
  measurementId: "G-K337RC7660"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }

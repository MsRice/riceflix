// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBchlFoA-RYUX2E7Xd3-E79Vobhwusa-Yw",
  authDomain: "riceflix-826bc.firebaseapp.com",
  projectId: "riceflix-826bc",
  storageBucket: "riceflix-826bc.firebasestorage.app",
  messagingSenderId: "256882115652",
  appId: "1:256882115652:web:3d614b122d2e1d3bc62811",
  measurementId: "G-YC7YTCW13D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const db = getFirestore()

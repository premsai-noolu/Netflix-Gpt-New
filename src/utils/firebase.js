// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIUwexSbFVL_z_wtHypOA0yyYDUHs5Eoo",
  authDomain: "netflixgpt-86241.firebaseapp.com",
  projectId: "netflixgpt-86241",
  storageBucket: "netflixgpt-86241.firebasestorage.app",
  messagingSenderId: "963712042754",
  appId: "1:963712042754:web:381dd8adab3bb53af4a41b",
  measurementId: "G-PGX2VJ26PM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

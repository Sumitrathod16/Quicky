// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvxj9V8PkhtPGgzGeUk2uH0xP7tJWRojw",
  authDomain: "quicky-5c661.firebaseapp.com",
  projectId: "quicky-5c661",
  storageBucket: "quicky-5c661.firebasestorage.app",
  messagingSenderId: "795896316605",
  appId: "1:795896316605:web:c682c1bba029982282edd4",
  measurementId: "G-PX83Q5SK01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};
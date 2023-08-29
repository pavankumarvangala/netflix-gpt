// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFnPqF9PsyJq1-Lnq3daw_-AaaH3gqkdo",
  authDomain: "netflixgpt-be1bb.firebaseapp.com",
  projectId: "netflixgpt-be1bb",
  storageBucket: "netflixgpt-be1bb.appspot.com",
  messagingSenderId: "709379091913",
  appId: "1:709379091913:web:e6c7982504231f53c98c18",
  measurementId: "G-QY3BTD9HXL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGjwVo-d81TVcRonbfZtJxsYvmYq3hW1c",
  authDomain: "streaminggpt.firebaseapp.com",
  projectId: "streaminggpt",
  storageBucket: "streaminggpt.appspot.com",
  messagingSenderId: "661579293120",
  appId: "1:661579293120:web:f5d48232063501f1456825",
  measurementId: "G-XL9SH9QY7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
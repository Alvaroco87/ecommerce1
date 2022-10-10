// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDj-FE-xvNR-A1IePkJVUOAAfdumnrV3oQ",
    authDomain: "e-commerce-27939.firebaseapp.com",
    projectId: "e-commerce-27939",
    storageBucket: "e-commerce-27939.appspot.com",
    messagingSenderId: "570764678355",
    appId: "1:570764678355:web:a60b1a66867ba82f667026"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
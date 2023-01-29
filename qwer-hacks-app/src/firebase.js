// Import the functions you need from the SDKs you need
import "firebase/database";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlxOCQevmeWb1F9ZCdCJC1Yqb-TWC01Mw",
    authDomain: "qwerhacks2023.firebaseapp.com",
    projectId: "qwerhacks2023",
    storageBucket: "qwerhacks2023.appspot.com",
    messagingSenderId: "598409153405",
    appId: "1:598409153405:web:f688a1d347e095599c1a14",
    measurementId: "G-CLEL9F1MXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const author = getAuth(app);
export const database = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
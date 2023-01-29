import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigation from './shared/navbar.js';
import {initializeApp} from 'firebase/app';
import getFirestore from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDlxOCQevmeWb1F9ZCdCJC1Yqb-TWC01Mw",
  authDomain: "qwerhacks2023.firebaseapp.com",
  projectId: "qwerhacks2023",
  storageBucket: "qwerhacks2023.appspot.com",
  messagingSenderId: "598409153405",
  appId: "1:598409153405:web:f688a1d347e095599c1a14",
  measurementId: "G-CLEL9F1MXJ"
}

initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

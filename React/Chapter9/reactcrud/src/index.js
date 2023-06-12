import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var config = {
  apiKey: "AIzaSyCdZK_wUPrtbU7ZS0Mqrp89xTcmiZgq2mE",
  authDomain: "crudproject-59b5b.firebaseapp.com",
  projectId: "crudproject-59b5b",
  storageBucket: "crudproject-59b5b.appspot.com",
  messagingSenderId: "240697712984",
  appId: "1:240697712984:web:083914e4d1b2e491f5c52d",
  measurementId: "G-6B8DRE4S9Z"
};
firebase.initializeApp(config);

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

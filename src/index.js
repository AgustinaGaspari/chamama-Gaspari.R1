import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCntDuXg0D68Vf4gLX1ydpa9KHKBssrfMs",
    authDomain: "chamama-409fd.firebaseapp.com",
    projectId: "chamama-409fd",
    storageBucket: "chamama-409fd.appspot.com",
    messagingSenderId: "10157489211",
    appId: "1:10157489211:web:b204dcbd094a985316701e"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<App />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

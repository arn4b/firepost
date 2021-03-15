import React, {useState, useRef} from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs5x3IJk_kTHaPb6zvrRC-yUyymx4j1yk",
  authDomain: "firepost-7275a.firebaseapp.com",
  databaseURL: "https://firepost-7275a-default-rtdb.firebaseio.com",
  projectId: "firepost-7275a",
  storageBucket: "firepost-7275a.appspot.com",
  messagingSenderId: "221872516361",
  appId: "1:221872516361:web:6784d32f785eb31c1437d8",
  measurementId: "G-RGJ905GTZF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();
var admin = require("firebase-admin");

// var db = admin.database();


function App() {

  // const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      </header>
    </div>
  );
}

export default App;

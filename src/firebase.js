import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBs5x3IJk_kTHaPb6zvrRC-yUyymx4j1yk",
    authDomain: "firepost-7275a.firebaseapp.com",
    projectId: "firepost-7275a",
    storageBucket: "firepost-7275a.appspot.com",
    messagingSenderId: "221872516361",
    appId: "1:221872516361:web:6784d32f785eb31c1437d8",
    measurementId: "G-RGJ905GTZF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, storage, providr};
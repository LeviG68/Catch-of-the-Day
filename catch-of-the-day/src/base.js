import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyCxPAE8y9qBnjESFLKGRfLQQ68dd2GYgC4",
  authDomain: "catch-of-the-day-levi-c1ec8.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-levi-c1ec8-default-rtdb.firebaseio.com",
  projectId: "catch-of-the-day-levi-c1ec8",
  storageBucket: "catch-of-the-day-levi-c1ec8.appspot.com",
  messagingSenderId: "1087728619224",
  appId: "1:1087728619224:web:e82dd629e5f3fb304051ad",
  measurementId: "G-R1Z0DGDSBB"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export 
export default base;
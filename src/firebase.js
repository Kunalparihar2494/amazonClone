/* eslint-disable no-unused-vars */
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCjqiMkUGBRmP0tUx6U29cSuvb6Q3e7myc",
  authDomain: "react-3eed0.firebaseapp.com",
  projectId: "react-3eed0",
  storageBucket: "react-3eed0.appspot.com",
  messagingSenderId: "520409888624",
  appId: "1:520409888624:web:b045e2a65cbfdcc3e8c1b5",
  measurementId: "G-6GDQTEVR5E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
console.log('firebase-',auth);
export {db,auth};
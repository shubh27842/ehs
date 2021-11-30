// Import the functions you need from the SDKs you need
import firebase from "firebase";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrmUgoEKpL0nqEw4VnpG871gT30V9fEbE",
  authDomain: "ehs-firebase-auth.firebaseapp.com",
  projectId: "ehs-firebase-auth",
  storageBucket: "ehs-firebase-auth.appspot.com",
  messagingSenderId: "168890505130",
  appId: "1:168890505130:web:67874ad07f3af1fef33dd3",
  measurementId: "G-TWVQNC3MSG"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig)
firebase.analytics();


export default firebase
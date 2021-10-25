// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firebase-store"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5FOuZrLhDcR8A40vBpajykVCSBOKoGSM",
  authDomain: "summer-hicking.firebaseapp.com",
  projectId: "summer-hicking",
  storageBucket: "summer-hicking.appspot.com",
  messagingSenderId: "760501410583",
  appId: "1:760501410583:web:2a4201f01c72417a51b552",
  measurementId: "G-CY1DN22SPE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase;
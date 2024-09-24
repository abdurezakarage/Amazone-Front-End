
import firebase  from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import  "firebase/compat/firestore";
import "firebase/compat/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCAoT2z-6NqsgxO8Vn9W6oHSPCs8ZX14KI",
  authDomain: "abduproject-2.firebaseapp.com",
  projectId: "abduproject-2",
  storageBucket: "abduproject-2.appspot.com",
  messagingSenderId: "686113868348",
  appId: "1:686113868348:web:30a0a6864c456b611bd139",
  measurementId: "G-B1RMEK4L4K",
};

//Import the functions you need from the SDKs you need
// import  firebase from "firebase/compat/app";
// import { getAuth } from "firebase/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/auth";
// const firebaseConfig = {
//   apiKey: "AIzaSyDbfV38gAyrZMX29ONcmLjJgw7fdc7pF28",
//   authDomain: "amfullstack1.firebaseapp.com",
//   projectId: "amfullstack1",
//   storageBucket: "amfullstack1.appspot.com",
//   messagingSenderId: "650842413430",
//   appId: "1:650842413430:web:a1a54b71d12423f0e30257"
// };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore()

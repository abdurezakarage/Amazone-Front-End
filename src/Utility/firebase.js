
// Import the functions you need from the SDKs you need
import firebase  from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCAoT2z-6NqsgxO8Vn9W6oHSPCs8ZX14KI",
//   authDomain: "abduproject-2.firebaseapp.com",
//   projectId: "abduproject-2",
//   storageBucket: "abduproject-2.appspot.com",
//   messagingSenderId: "686113868348",
//   appId: "1:686113868348:web:30a0a6864c456b611bd139",
//   measurementId: "G-B1RMEK4L4K"
// };
const firebaseConfig = {
  apiKey: "AIzaSyD-_uZsMyRuAcnnchHbXH53PREdLQth0VQ",
  authDomain: "project-2-012.firebaseapp.com",
  projectId: "project-2-012",
  storageBucket: "project-2-012.appspot.com",
  messagingSenderId: "699255138957",
  appId: "1:699255138957:web:c740950f2b975b362150c4",
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = app.firestore();

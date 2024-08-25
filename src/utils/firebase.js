// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE,
  authDomain: "naz-blogs.firebaseapp.com",
  projectId: "naz-blogs",
  storageBucket: "naz-blogs.appspot.com",
  messagingSenderId: "264621065746",
  appId: "1:264621065746:web:66318115dbf8033df8bacb",
  measurementId: "G-DKEHFXKKTJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2d255.firebaseapp.com",
  projectId: "mern-blog-2d255",
  storageBucket: "mern-blog-2d255.appspot.com",
  messagingSenderId: "1003097902930",
  appId: "1:1003097902930:web:c4e748354a24d997cb348b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
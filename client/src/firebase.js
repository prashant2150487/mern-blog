// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-48009.firebaseapp.com",
    projectId: "mern-blog-48009",
    storageBucket: "mern-blog-48009.appspot.com",
    messagingSenderId: "1044570567198",
    appId: "1:1044570567198:web:191f2b56dab1647651740f",
    measurementId: "G-DEQEN8GF04"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
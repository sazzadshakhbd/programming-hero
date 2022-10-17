// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhsNkMnkP9HbtDmNiCwbl91Yge2AGEfHE",
    authDomain: "timple-firebase-auth-fc2cd.firebaseapp.com",
    projectId: "timple-firebase-auth-fc2cd",
    storageBucket: "timple-firebase-auth-fc2cd.appspot.com",
    messagingSenderId: "948076696384",
    appId: "1:948076696384:web:0f33016bfcd28fea5ce0a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
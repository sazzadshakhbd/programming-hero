// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAg_FBdzkxTVz9SsIIxP2hlXMJW7qZI0jU",
    authDomain: "dragon-news-c9deb.firebaseapp.com",
    projectId: "dragon-news-c9deb",
    storageBucket: "dragon-news-c9deb.appspot.com",
    messagingSenderId: "465321962562",
    appId: "1:465321962562:web:83e863fe3785cf462f91db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
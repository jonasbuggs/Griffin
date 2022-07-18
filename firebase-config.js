// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7Cw2QY9EOfcsjbQTynR62Oh1YlQs4mqI",
    authDomain: "griffin-a5136.firebaseapp.com",
    projectId: "griffin-a5136",
    storageBucket: "griffin-a5136.appspot.com",
    messagingSenderId: "360635413173",
    appId: "1:360635413173:web:3e6dbe16ad4f574a7f44fc",
    measurementId: "G-R5EVF56T2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
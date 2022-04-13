// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzuVL2PkNe54cKpxgL-iNjKQgP5ovBkxY",
    authDomain: "ema-john-simple-e9d6d.firebaseapp.com",
    projectId: "ema-john-simple-e9d6d",
    storageBucket: "ema-john-simple-e9d6d.appspot.com",
    messagingSenderId: "1038047193968",
    appId: "1:1038047193968:web:193776771e037ab0f2fdb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpRn3eWRdDV7dBc3cYQZvcjTC3ZtLVDOg",
    authDomain: "rudiment-8927f.firebaseapp.com",
    projectId: "rudiment-8927f",
    storageBucket: "rudiment-8927f.appspot.com",
    messagingSenderId: "19596321781",
    appId: "1:19596321781:web:adb691bc55e25c78fff6bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth();
const storage = getStorage();

export { auth, storage };

export default app;
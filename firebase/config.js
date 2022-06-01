import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBCj0TGUB9FjtNUOqkreTNjPC5l28bUCMk",
  authDomain: "weproject-c52d8.firebaseapp.com",
  projectId: "weproject-c52d8",
  storageBucket: "weproject-c52d8.appspot.com",
  messagingSenderId: "78456879287",
  appId: "1:78456879287:web:9c513be62d9f1efd4cf532"
};

// Initialize Firebase
initializeApp(firebaseConfig)

// Initialize Firestore
const db = getFirestore()

// Intialize Auth
const auth = getAuth()

// Initialize Google Auth Provider
const provider = new GoogleAuthProvider()

// Timestamp
// const timestamp = Timestamp

//  timestamp.now()
export { db, auth, provider }
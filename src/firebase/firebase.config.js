// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwEh7bL3UB5f0fu1S0EimGOfDcsNRdAfE",
  authDomain: "auth-firebase-context-tialwind.firebaseapp.com",
  projectId: "auth-firebase-context-tialwind",
  storageBucket: "auth-firebase-context-tialwind.appspot.com",
  messagingSenderId: "567500764712",
  appId: "1:567500764712:web:545be6f24888d489fde71d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
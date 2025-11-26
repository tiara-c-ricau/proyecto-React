// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

 
const firebaseConfig = {
  apiKey: "AIzaSyDn7g9S0q3zyAvWPgS1NWBkS3lX7gknyhQ",
  authDomain: "coder-flex-81710.firebaseapp.com",
  projectId: "coder-flex-81710",
  storageBucket: "coder-flex-81710.firebasestorage.app",
  messagingSenderId: "299099967305",
  appId: "1:299099967305:web:c799d59a0eed2dc1455498"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Exportar esa instancia de firestore
export const db = getFirestore(app)

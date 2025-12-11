import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBH4PD6H-AeaVJT_7sUSFmtcOmEzrS0FtE",
  authDomain: "proyecto-react-1f4a4.firebaseapp.com",
  projectId: "proyecto-react-1f4a4",
  storageBucket: "proyecto-react-1f4a4.appspot.com",
  messagingSenderId: "286686244109",
  appId: "1:286686244109:web:998d1d1c28a8aa6117bee4"
};

// MUY IMPORTANTE: inicializar Firebase
export const app = initializeApp(firebaseConfig);

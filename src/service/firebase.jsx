import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  getDocs, 
  getDoc, 
  doc,
  query, 
  where
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBH4PD6H-AeaVJT_7sUSFmtcOmEzrS0FtE",
  authDomain: "proyecto-react-1f4a4.firebaseapp.com",
  projectId: "proyecto-react-1f4a4",
  storageBucket: "proyecto-react-1f4a4.firebasestorage.app",
  messagingSenderId: "504156551742",
  appId: "1:504156551742:web:7f855fd4d1820de09caf6f"
};

export const getItems = async () => {
  return await getProducts();
};



// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar base de datos
export const db = getFirestore(app);

// Obtener TODOS los productos
export const getProducts = async () => {
  // query() ahora SÍ está definido porque lo importaste arriba
  const q = query(collection(db, "productos"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// Obtener un solo producto por ID
export const getProductById = async (id) => {
  const ref = doc(db, "productos", id);
  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...snapshot.data()
  };
};





/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


 
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
export const db = getFirestore(app) */

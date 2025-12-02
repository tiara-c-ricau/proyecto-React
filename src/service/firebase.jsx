import { initializeApp } from "firebase/app";
import { 
  getFirestore,
  collection,
  getDocs,
  query,
  where
} from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBH4PD6H-AeaVJT_7sUSFmtcOmEzrS0FtE",
  authDomain: "proyecto-react-1f4a4.firebaseapp.com",
  projectId: "proyecto-react-1f4a4",
  storageBucket: "proyecto-react-1f4a4.appspot.com",
  messagingSenderId: "670205135734",
  appId: "1:670205135734:web:574458f0225dc5e7a7f968"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// Obtener un solo producto por ID
export async function getProductById(id) {
  const ref = doc(db, "items", id);
  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) return null;

  return { id: snapshot.id, ...snapshot.data() };
}

export async function getItems(categoryId) {
  const itemsRef = collection(db, "items");

  let q = itemsRef;

  if (categoryId) {
    q = query(itemsRef, where("category", "==", categoryId));
  }

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
}

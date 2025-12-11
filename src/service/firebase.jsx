import { 
  getFirestore, 
  collection, 
  getDocs, 
  query, 
  where,
  doc,
  getDoc
} from "firebase/firestore";


export const getItems = async (categoryId) => {
  const db = getFirestore();
  const itemsRef = collection(db, "items");

  let consulta = itemsRef;

  if (categoryId) {
    consulta = query(itemsRef, where("category", "==", categoryId));
  }

  const snapshot = await getDocs(consulta);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};


export const getProductById = async (id) => {
  const db = getFirestore();
  const docRef = doc(db, "items", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) return null;

  return { id: docSnap.id, ...docSnap.data() };
};

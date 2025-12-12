import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";

export const getItems = async (categoryId) => {
  const db = getFirestore();
  const itemsRef = collection(db, "items");

  let consulta = itemsRef;

  if (categoryId) {
    consulta = query(itemsRef, where("category", "==", categoryId));
  }

  const snapshot = await getDocs(consulta);

  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      precio: Number(data.precio), // por si acaso
    };
  });
};

export const getProductById = async (id) => {
  const db = getFirestore();
  const ref = doc(db, "items", id);

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) return null;

  const data = snapshot.data();

  return {
    id: snapshot.id,
    ...data,
    precio: Number(data.precio),
  };
};

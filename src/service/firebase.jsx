import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where
} from "firebase/firestore";

export const getItems = async (categoryId) => {
  const db = getFirestore();
  const itemsRef = collection(db, "items");

  let consulta = itemsRef;

  if (categoryId) {
    const categoryNormalizada = categoryId
      .replace(/-/g, " ")
      .toLowerCase();

    consulta = query(
      itemsRef,
      where("category", "==", categoryNormalizada)
    );
  }

  const snapshot = await getDocs(consulta);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getProductById = async (id) => {
  const db = getFirestore();
  const ref = doc(db, "items", id);

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
};

/* import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";


export const getItems = async (categoryId) => {
  const db = getFirestore();
  const itemsRef = collection(db, "items");

  let consulta = itemsRef;

  if (categoryId) {
  const categoryNormalizada = categoryId
    .replace(/-/g, " ")
    .toLowerCase();

  consulta = query(
    itemsRef,
    where("category", "==", categoryNormalizada)
  );
}


  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      precio: Number(data.precio),
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
 */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, doc, getDocs, getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH4PD6H-AeaVJT_7sUSFmtcOmEzrS0FtE",
  authDomain: "proyecto-react-1f4a4.firebaseapp.com",
  projectId: "proyecto-react-1f4a4",
  storageBucket: "proyecto-react-1f4a4.firebasestorage.app",
  messagingSenderId: "504156551742",
  appId: "1:504156551742:web:7f855fd4d1820de09caf6f"
};

const app = initializeApp(firebaseConfig);

const db=getFirestore(app)

export async function getItems(){
  const querySnapshot = await getDocs(collection(db, 'items'));
 querySnapshot.forEach(doc => console.log(`${doc.id} => ${doc.data()}`))
}

const complexQuery = query(
  itemsCollectionRef,
  where("price", ">", 100),
  where("category", "==", "nuevos")
);

getDocs(complexQuery).then(snapshot => {
  snapshot.forEach(doc => {
    console.log(doc.id, doc.data());
  });
});
import { initializeApp } from 'firebase/app';
import {
getFirestore,
collection,
getDocs,
getDoc,
doc,
query
} from 'firebase/firestore';


const firebaseConfig = {
apiKey: 'AIzaSyBH4PD6H-AeaVJT_7sUSFmtcOmEzrS0FtE',
authDomain: 'proyecto-react-1f4a4.firebaseapp.com',
projectId: 'proyecto-react-1f4a4',
storageBucket: 'proyecto-react-1f4a4.appspot.com',
messagingSenderId: '504156551742',
appId: '1:504156551742:web:7f855fd4d1820de09caf6f'
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export const getProducts = async () => {
const q = query(collection(db, 'productos'));
const snapshot = await getDocs(q);
return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
};


export const getItems = async () => {
return await getProducts();
};


export const getProductById = async (id) => {
const ref = doc(db, 'productos', id);
const snapshot = await getDoc(ref);
if (!snapshot.exists()) return null;
return { id: snapshot.id, ...snapshot.data() };
};
import { Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartPage from './components/CartPage';
import Error from './components/Error';
import Checkout from './components/Checkout';
import CheckoutRHF from './components/CheckoutRHF';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
        <Route path="*" element={<p>404 - Página no encontrada</p>} />
      </Routes>
    </>
  );
}

export default App;


/* function App() {

  useEffect(()=>{
    getItems();
  },[])

    return (
    <Navbar >
    <CartProvider />
    <Routes> 
      <Route path='/' element={<ItemListContainer saludo='Bienvenido!' />}/> 

      <Route path='/item/:id' element={<ItemDetailContainer/>}/>

      <Route path='/categoria/:categoryId' element={<ItemListContainer />} />

      <Route path='*' element={<p>404-error</p>}/>

      <Route path="/detalle/:id" element={<ItemDetailContainer />} />

      </Routes> 

    

  )
}

export default App
 */
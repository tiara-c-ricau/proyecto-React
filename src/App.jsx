import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { useEffect } from 'react';
import { getItems } from './assets/firebase';
import Error from './components/Error';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout';
import CheckoutRHF from './components/CheckoutRHF';
function App() {

  useEffect(()=>{
    getItems();
  },[])

    return (
    <BrowserRouter>
    <Navbar />

    <Routes> 
      <Route path='/' element={<ItemListContainer saludo='Bienvenido!' />}/> 

      <Route path='/item/:id' element={<ItemDetailContainer/>}/>

      <Route path='/categoria/:categoryId' element={<ItemListContainer />} />

      <Route path='*' element={<p>404-error</p>}/>

      <Route path="/detalle/:id" element={<ItemDetailContainer />} />

      </Routes> 

     
    </BrowserRouter>

  )
}

export default App

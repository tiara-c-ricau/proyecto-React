import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import Navbar from '../components/Navbar';
import './App.css';
import { getProductos } from '../mock/AsyncServices';
import ItemCount from '../components/ItemCount';
import ItemDetailContainer from '../components/ItemDetailContainer';
import './App.css';

function App() {
  const [cartCount, setCartCount] = useState(0);
    const [productos, setProductos] = useState([]);

    
  useEffect(() => {
    getProductos().then((data) => setProductos(data));
  }, []);

   const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <BrowserRouter>
    <Navbar cartCount={cartCount}/>

    <Routes> 
      <Route path='/' element={<ItemListContainer saludo='Bienvenido!' />}/> 

      <Route path='/item/:id' element={<ItemDetailContainer/>}/>

      <Route path='/categoria/:categoryId' element={<ItemListContainer />} />

      <Route path='*' element={<p>404-error</p>}/>

      <Route path="/detalle/:id" element={<ItemDetailContainer />} />

      </Routes> 

      <ItemCount productos={productos} />
    </BrowserRouter>

  )
}

export default App

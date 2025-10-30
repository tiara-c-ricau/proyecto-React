import ItemListContainer from '../components/ItemListContainer';
import Navbar from '../components/Navbar';
import './App.css';
import AsyncServices from '../mock/AsyncServices';
import ItemCount from "../components/ItemCount";
import ItemDetailContainer from '../components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Categoria from '../pages/Categoria';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes> 
      <Route path='/' element={<ItemListContainer saludo='Bienvenido!' />}/> 
      <Route path='/' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<Error/>}/>
      <Route path="/detalle/:id" element={<ItemDetailContainer />} />

      </Routes> 
      <ItemCount />
      <AsyncServices />
    </BrowserRouter>
    </>

  )
}

export default App

import ItemListContainer from '../components/ItemListContainer';
import Navbar from '../components/Navbar';
import './App.css';
import AsyncServices from '../mock/AsyncServices';
import ItemCount from "../components/ItemCount";
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  

  return (
    <><BrowserRouter /><Navbar />
    <Routes> <Route path='' element='{}'/> </Routes> <ItemListContainer saludo='Bienvenido!' /><ItemCount /><AsyncServices /></>
   

  )
}

export default App

import ItemListContainer from '../components/ItemListContainer';
import Navbar from '../components/Navbar';
import './App.css';
import AsyncServices from '../mock/AsyncServices';
import ItemCount from "../components/ItemCount";



function App() {
  

  return (
    <>
      <Navbar/> 
      <ItemListContainer saludo='Bienvenido!'/>
      <ItemCount/>
       <AsyncServices/>
    </>
  );
}

export default App

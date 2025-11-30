import { Route, Routes, Navigate } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartView from './components/CartView';
import Error from './components/Error';
import Checkout from './components/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "./context/CartContext";
import Gracias from "./components/Gracias";

function App() {
return (
<>
<Navbar />
<main className="container mt-4">
<Routes>
<Route path="/checkout" element={<Checkout />} />
<Route path="/" element={<ItemListContainer />} />
<Route path="/detalle/:id" element={<ItemDetailContainer />} />
<Route path="/cart" element={<CartView />} />
<Route path="/categoria/:categoryId" element={<ItemListContainer />} />
<Route path="/404" element={<Error />} />
<Route path="*" element={<Navigate to="/404" replace />} />
<Route path="/gracias/:orderId" element={<Gracias />} />
</Routes>
</main>
</>
);
}


export default App;



/* import { Route, Routes } from 'react-router-dom';
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
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
        <Route path="*" element={<p>404 - Página no encontrada</p>} />
      </Routes>
    </>
  );
}

export default App; */



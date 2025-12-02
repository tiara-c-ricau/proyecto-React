import { Route, Routes, Navigate } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartView from './components/CartView';
import Error from './components/Error';
import Checkout from './components/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gracias from './components/Gracias'; 
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <CartProvider>
      <Navbar />
      <main className="container mt-4">
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
          <Route path="/gracias/:orderId" element={<Gracias />} />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
    </CartProvider>
  );
}

export default App;
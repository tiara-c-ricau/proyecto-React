import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [buyer, setBuyer] = useState({ name: "", phone: "", email: "", emailConfirm: "" });

  const handleChange = (e) => setBuyer({ ...buyer, [e.target.name]: e.target.value });

  if (cart.length === 0) return alert("El carrito está vacío");

  const generateOrder = async (e) => {
    e.preventDefault();

    if (buyer.name.length < 3) return alert("El nombre debe tener al menos 3 caracteres.");
    if (!/^\d+$/.test(buyer.phone)) return alert("El teléfono debe contener solo números.");
    if (buyer.email !== buyer.emailConfirm) return alert("Los correos no coinciden.");

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    const order = { buyer, items: cart, total: getTotalPrice(), date: new Date() };

    const docRef = await addDoc(ordersCollection, order);

    clearCart();
    navigate(`/gracias/${docRef.id}`);
  };

  return (
    <div className="container mt-5">
      <h2>Datos del comprador</h2>
      <form onSubmit={generateOrder} className="d-flex flex-column gap-3 mt-4">
        <input type="text" name="name" placeholder="Nombre" onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Teléfono" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="email" name="emailConfirm" placeholder="Confirmar email" onChange={handleChange} required />
        <button type="submit" className="btn btn-dark">Finalizar compra</button>
      </form>
    </div>
  );
}

export default Checkout;

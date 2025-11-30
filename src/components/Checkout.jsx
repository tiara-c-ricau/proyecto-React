import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const generateOrder = async (e) => {
    e.preventDefault();

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    const order = {
      buyer,
      items: cart,
      total: getTotalPrice(),
      date: new Date(),
    };

    const docRef = await addDoc(ordersCollection, order);

    clearCart();

    // Redirigir a página de agradecimiento pasando el orderId
    navigate(`/gracias/${docRef.id}`);
  };

  return (
    <div className="container mt-5">
      <h2>Datos del comprador</h2>

      <form onSubmit={generateOrder} className="mt-4">
        <input
          className="form-control mb-3"
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          type="text"
          name="phone"
          placeholder="Teléfono"
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <button className="btn btn-dark" type="submit">
          Finalizar compra
        </button>
      </form>
    </div>
  );
}

export default Checkout;

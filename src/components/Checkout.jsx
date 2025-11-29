import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../service/firebase';
import { Link } from 'react-router-dom';
import EmptyCart from './EmptyCart';

const Checkout = () => {
  const [buyer, setBuyer] = useState({
    name: "",
    lastname: "",
    mail: "",
    address: ""
  });

  const [repeatMail, setRepeatMail] = useState("");
  const [error, setError] = useState(null);
  const [orderId, setOrderId] = useState(null);

  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    });
  };

  const finalizarCompra = async (e) => {
    e.preventDefault();

    // Validaciones
    if (!buyer.name || !buyer.lastname || !buyer.mail || !buyer.address) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (buyer.mail !== repeatMail) {
      setError("Los correos no coinciden");
      return;
    }

    setError(null);

    // Orden a enviar
    const order = {
      comprador: buyer,
      items: cart,
      total: totalPrice(),
      fecha: serverTimestamp(),
    };

    try {
      const ventasRef = collection(db, "orders");
      const res = await addDoc(ventasRef, order);

      setOrderId(res.id);
      clearCart();
    } catch (err) {
      console.error(err);
      setError("Hubo un error al procesar la compra");
    }
  };

  if (!cart.length && !orderId) {
    return <EmptyCart />;
  }

  return (
    <>
      {orderId ? (
        <div style={{ padding: "20px" }}>
          <h2>¡Gracias por tu compra!</h2>
          <h4>Tu número de orden es: <strong>{orderId}</strong></h4>
          <Link className="btn btn-dark mt-3" to="/">Volver al Home</Link>
        </div>
      ) : (
        <div style={{ padding: "20px" }}>
          <h1>Completa tus datos</h1>

          {error && (
            <span style={{ color: "red", fontWeight: "bold" }}>{error}</span>
          )}

          <form
            className="p-4 border rounded shadow-sm bg-light"
            onSubmit={finalizarCompra}
          >
            <input
              className="form-control my-2"
              name="name"
              type="text"
              placeholder="Nombre"
              onChange={handleInputChange}
            />

            <input
              className="form-control my-2"
              name="lastname"
              type="text"
              placeholder="Apellido"
              onChange={handleInputChange}
            />

            <input
              className="form-control my-2"
              name="address"
              type="text"
              placeholder="Dirección"
              onChange={handleInputChange}
            />

            <input
              className="form-control my-2"
              name="mail"
              type="email"
              placeholder="Correo electrónico"
              onChange={handleInputChange}
            />

            <input
              className="form-control my-2"
              type="email"
              placeholder="Repetí tu correo"
              onChange={(e) => setRepeatMail(e.target.value)}
            />

            <button type="submit" className="btn btn-success mt-3">
              Finalizar Compra
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Checkout;

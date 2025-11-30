import React from "react";
import { useParams, Link } from "react-router-dom";

const Gracias = () => {
  const { orderId } = useParams();

  return (
    <div className="container mt-5 text-center">
      <h2>¡Gracias por tu compra! 🎉</h2>
      <p>Tu número de orden es: <strong>{orderId}</strong></p>
      <Link className="btn btn-dark mt-3" to="/">
        Volver al Home
      </Link>
    </div>
  );
};

export default Gracias;

import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="container text-center mt-5">
      <div className="card p-4 shadow-sm">
        <h1 className="mb-3">Tu carrito está vacío 😱</h1>
        <h4 className="mb-4">¡Te invitamos a ver nuestras mejores ofertas!</h4>

        <Link to="/category/ofertas" className="btn btn-dark btn-lg">
          Ir a ofertas
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;

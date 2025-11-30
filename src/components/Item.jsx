import React, { useContext } from "react";
import {  Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from "../context/CartContext";

const Item = ({ producto }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart(producto, 1);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        width: "200px",
        textAlign: "center",
      }}
    >
      <img
        src={producto.img}
        alt={producto.name}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>{producto.name}</h3>
      <p>{producto.description}</p>
      <p>${producto.price.toLocaleString()}</p>
      <p>Stock: {producto.stock}</p>

      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "10px", color: "black" }}>
        <button className="add" onClick={handleAdd}>Agregar al carrito</button>
        <Link to={`/producto/${producto.id}`}>
        </Link>
      </div>
    </div>
  );
};

export default Item;

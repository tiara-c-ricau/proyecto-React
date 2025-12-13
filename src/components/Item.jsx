import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Item = ({ producto }) => {
  const { addItem } = useContext(CartContext);
  

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
        { <img
        src={producto.img || "/default.jpg"}
        alt={producto.nombre || "Producto"}
        style={{ width: "100%", borderRadius: "8px" }}
      /> }

      <h3>{producto.nombre}</h3>
      <p>{producto.category}</p>{/* 
      <p>Stock: {producto.stock}</p> */}
      <p>${producto.precio ?.toLocaleString()}</p>
      <p>Stock: {producto.stock}</p>

      <div className="d-flex flex-column gap-2 mt-3" style={{ display: "flex", justifyContent: "space-around", marginTop: "8px" }}>

        <button onClick={() => addItem(producto, 1)}className="btn btn-success"
        style={{
      fontWeight: "bold",
      borderRadius: "2px",
      boxShadow: "0 2px 3px rgba(0,0,0,0.2)",
    }} 
          >🛒 Agregar al carrito</button>


       <Link to={`/detalle/${producto.id}`} className="btn btn-primary" style={{  fontWeight: "bold",
      borderRadius: "2px",
      boxShadow: "0 2px 3px rgba(0,0,0,0.2)",
      textAlign: "center",}}
       
       > 🔍Ver detalle</Link>

      </div>
    </div>
  );
};

export default Item;

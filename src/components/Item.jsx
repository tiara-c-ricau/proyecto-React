import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Item = ({ producto }) => {
  const { addItem } = useContext(CartContext);
  
  
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
        src={producto.img || "/default.jpg"} // fallback si no hay imagen
        alt={producto.name || "Producto"}
        style={{ width: "100%", borderRadius: "8px" }}
      />

      <h3>{producto.name}</h3>
      <p>{producto.description}</p>
      <p>Stock: {producto.stock}</p>
      <p>${producto.price ? producto.price.toLocaleString() : "0" }</p>
      <p>Stock: {producto.stock ?? 0}</p>

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

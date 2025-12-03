import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ detalle, onAddToCart }) => {
  const [addedQty, setAddedQty] = useState(0);
  

  const handleAdd = (qty) => {
    onAddToCart(detalle, qty);
    setAddedQty(qty);
  };

  return (
    <div className="card p-4" style={{ borderRadius: 8 }}>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <img src={detalle.img || "/default.jpg"} alt={detalle.name} style={{ width: 300, borderRadius: 8 }} />

        <div style={{ flex: 1 }}>
          <h2>{detalle.name}</h2>
          <p style={{ color: "#555" }}>{detalle.description}</p>
          <p>Stock: {detalle.stock}</p>
          <p style={{ fontWeight: 700 }}>Precio: ${detalle.price?.toLocaleString()}</p>

          {!addedQty ? (
            <ItemCount stock={detalle.stock} initial={1} onAdd={handleAdd} />
          ) : (
            <p className="mt-3">Agregaste {addedQty} al carrito.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail; 

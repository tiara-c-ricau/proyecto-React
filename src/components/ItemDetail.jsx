import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ detalle }) => {
  const [addedQty, setAddedQty] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleAdd = (qty) => {
    addItem(detalle, qty);
    setAddedQty(qty);
  };

  return (
    <div className="card p-4" style={{ borderRadius: 8 }}>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <img
  src={`/${detalle.img}`}
  alt={detalle.nombre}
  style={{ width: 300, borderRadius: 8 }}
/>


        <div style={{ flex: 1 }}>
          <h2>{detalle.nombre}</h2>
          <p>Stock: {detalle.stock}</p>
          <p style={{ fontWeight: 700 }}>
            Precio: ${detalle.precio?.toLocaleString()}
          </p>

          {!addedQty ? (
            <ItemCount
              stock={detalle.stock}
              initial={1}
              onAdd={handleAdd}
            />
          ) : (
            <p className="mt-3">
              Agregaste {addedQty} al carrito.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

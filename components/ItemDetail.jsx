import React from "react";

function ItemDetail({ item }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "1.5rem",
        maxWidth: "400px",
        margin: "0 auto",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2>{item.title}</h2>
      <img
        src={item.imageUrl}
        alt={item.title}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <p>{item.description}</p>
      <p style={{ fontWeight: "bold" }}>Precio: ${item.price}</p>
    </div>
  );
}

export default ItemDetail;





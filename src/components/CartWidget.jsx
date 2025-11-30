import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  const totalItems = getTotalItems();

  return (
    <Link to="/cart" style={{ textDecoration: "none" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "#222",
          padding: "5px 10px",
          borderRadius: "8px",
          cursor: "pointer",
          color: "white",
        }}
      >
        <span style={{ fontSize: "22px" }}>🛒</span>
        {totalItems > 0 && (
          <span
            style={{
              backgroundColor: "red",
              borderRadius: "50%",
              padding: "2px 8px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            {totalItems}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartWidget;

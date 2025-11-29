import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeItem, clearCart, getTotalPrice } = useContext(CartContext);

  const total = getTotalPrice();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Carrito de compras</h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} style={{ marginBottom: "12px" }}>
                <strong>{item.name}</strong> — {item.quantity} unid.
                <span style={{ marginLeft: "5px" }}>
                  Subtotal: ${item.price * item.quantity}
                </span>

                <button
                  style={{ marginLeft: "15px" }}
                  onClick={() => removeItem(item.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>

          <h3>Total: ${total}</h3>

          <button onClick={clearCart} style={{ marginTop: "10px" }}>
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;


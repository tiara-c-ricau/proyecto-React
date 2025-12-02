import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función oficial para agregar items al carrito
  const addItem = (item, quantity) => {
    const existing = cart.find((p) => p.id === item.id);
    if (existing) {
      setCart(
        cart.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (id) => setCart(cart.filter((i) => i.id !== id));
  const clearCart = () => setCart([]);

  const getTotalItems = () => cart.reduce((acc, i) => acc + i.quantity, 0);
  const getTotalPrice = () => cart.reduce((acc, i) => acc + i.quantity * i.price, 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, getTotalItems, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

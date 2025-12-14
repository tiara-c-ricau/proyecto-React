import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    if (!item || cantidad <= 0) return;

    const itemExistente = cart.find((p) => p.id === item.id);

    if (itemExistente) {
      setCart(
        cart.map((p) =>
          p.id === item.id
            ? { ...p, cantidad: p.cantidad + cantidad }
            : p
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...item,
          cantidad,
          precio: Number(item.precio), // 🔥 clave anti-NaN
        },
      ]);
    }
  };

  const removeItem = (id) => setCart(cart.filter((i) => i.id !== id));
  const clearCart = () => setCart([]);

  const getTotalItems = () =>
    cart.reduce((acc, i) => acc + i.cantidad, 0);

  const getTotalPrice = () =>
    cart.reduce((acc, i) => acc + i.cantidad * i.precio, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

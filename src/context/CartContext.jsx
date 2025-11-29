import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  // 👉 Agregar producto al carrito
  const addItem = (item, quantity) => {

    // si el producto ya existe, sumamos cantidad
    const existingItem = cart.find(prod => prod.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map(prod =>
        prod.id === item.id
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      );
      setCart(updatedCart);
    } else {
      // si no existe, lo agregamos nuevo
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // 👉 Eliminar un solo producto
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // 👉 Vaciar carrito completo
  const clearCart = () => {
    setCart([]);
  };

  // 👉 Total de unidades en el carrito
  const getTotalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  // 👉 Total general del carrito (sumatoria de subtotales)
  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

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

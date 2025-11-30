import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para añadir productos al carrito
  const addToCart = (item, quantity) => {
    const existing = cart.find(p => p.id === item.id);
    if (existing) {
      setCart(cart.map(p => p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Función para eliminar un producto por ID
  const removeItem = (id) => {
    setCart(cart.filter(i => i.id !== id));
  };

  // Vaciar el carrito
  const clearCart = () => setCart([]);

  // Obtener total de ítems
  const getTotalItems = () => cart.reduce((acc, i) => acc + i.quantity, 0);

  // Obtener total del carrito
  const getTotalPrice = () => cart.reduce((acc, i) => acc + i.quantity * i.price, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeItem,
      clearCart,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

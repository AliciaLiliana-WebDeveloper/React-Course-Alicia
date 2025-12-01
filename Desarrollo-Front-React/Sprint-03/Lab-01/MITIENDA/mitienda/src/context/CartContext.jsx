import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems"));
      savedCartItems && setCartItems(savedCartItems);
  }, []);

  // Agregar productos al carrito y guardar en localStorage
  const addToCart = (item) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  // Vaciar carrito
  const resetCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
};

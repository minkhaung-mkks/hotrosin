"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isVisible, setIsVisible] = useState(false); // Visibility state of the cart

  // Load cart from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    const visibleStatus = localStorage.getItem('cartVisible');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    setIsVisible(visibleStatus === 'true');
  }, []);

  // Save cart and visibility to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('cartVisible', isVisible.toString());
  }, [cart, isVisible]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleCartVisibility = () => {
    setIsVisible(!isVisible);
  };

  const updateItemCount = (id, count) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: count } : item
      )
    );
  };

  const updateItemVariation = (id, variation) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, variation } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{
      cart,
      isVisible,
      addToCart,
      removeFromCart,
      clearCart,
      toggleCartVisibility,
      updateItemCount,
      updateItemVariation
    }}>
      {children}
    </CartContext.Provider>
  );
};

"use client";
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
    if (visibleStatus) {
      setIsVisible(visibleStatus === 'true');
    }
  }, []);

  // Add to cart and update localStorage
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.name === item.name && cartItem.variant === item.variant
      );

      let updatedCart;
      if (existingItemIndex >= 0) {
        // Update the count of the existing item
        updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          count: updatedCart[existingItemIndex].count + 1,
        };
      } else {
        // Add new item to the cart
        updatedCart = [...prevCart, { ...item, count: 1 }];
      }

      // Update localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Remove from cart and update localStorage
  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((_, i) => i !== index);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Clear cart and update localStorage
  const clearCart = () => {
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
  };

  // Update item count and update localStorage
  const updateItemCount = (index, count) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item, i) =>
        i === index ? { ...item, count: count } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Update item variation and update localStorage
  const updateItemVariation = (index, variation) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item, i) =>
        i === index ? { ...item, variation } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const toggleCartVisibility = () => {
    setIsVisible(!isVisible);
    localStorage.setItem('cartVisible', (!isVisible).toString());
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isVisible,
        addToCart,
        removeFromCart,
        clearCart,
        toggleCartVisibility,
        updateItemCount,
        updateItemVariation,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

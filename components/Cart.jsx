"use client";
import { useCart } from "@/context/cartContext";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

const ShoppingCart = () => {
  const navigation = useRouter(); // Use the useRouter hook

  const {
    cart,
    isVisible,
    toggleCartVisibility,
    removeFromCart,
    clearCart,
    updateItemCount,
    updateItemVariation,
  } = useCart();

  const [localCart, setLocalCart] = useState([])
  const handleCheckout = () => {
    navigation.push("/checkout"); // Navigate to the checkout page using navigation.push
  };
useEffect(() => {
  setLocalCart(cart)
}, [cart,isVisible])

  return (
    <>
      {isVisible ? (
        <>
          <div onClick={toggleCartVisibility} className="cart_overlay"></div>
          <div className="cart">
            <div className="cart_header">
              <h1>Your Cart</h1>
              <button className="closeCartBtn" onClick={toggleCartVisibility}>
                x
              </button>
            </div>
            <div className="cart_items_box">
              <div className="cart_item" style={{ padding: 0 }}>
                <div
                  className="cart_img_box"
                  style={{
                    backgroundColor: "transparent",
                    borderRight: "1px solid white",
                    padding: "0 0% 0 0",
                    margin: "0%",
                    borderRadius: 0,
                    justifyContent: "center",
                    width: "33%",
                  }}
                >
                  <span
                    className="cart_item_name"
                    style={{ textAlign: "center" }}
                  >
                    img
                  </span>
                </div>
                <div
                  className="cart_descript_box"
                  style={{
                    width: "42%",
                    backgroundColor: "transparent",
                    borderRight: "1px solid white",
                    padding: "0%",
                    margin: "0%",
                    borderRadius: 0,
                    alignItems: "center",
                  }}
                >
                  <span className="cart_item_name">item</span>
                </div>
                <div
                  className="cart_amount_box"
                  style={{
                    backgroundColor: "transparent",
                    padding: 0,
                    margin: 0,
                    borderRadius: 0,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <span className="cart_item_name">Count</span>
                </div>
              </div>
              
              {localCart.length > 0 ? (localCart.map((item, index) => (
                <div className="cart_item" key={index}>
                  <div className="cart_img_box">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="cart_descript_box">
                    <span className="cart_item_name">{item.name}</span>
                    <span>
                      <span className="variant_highlight">{item.variant}</span>
                    </span>
                    <span className="cart_item_price">price : ${item.price}</span>
                  </div>
                  <div className="cart_amount_box">
                    <div>
                      <span>{item.count}</span> {/* Replace with dynamic count */}
                    </div>
                    <button onClick={() => removeFromCart(index)}>-</button>
                    {/* <button onClick={() => updateItemCount(item, item.count - 1)}>-</button>÷ */}
                    {/* <button onClick={() => updateItemCount(item, item.count + 1)}>+</button> */}
                  </div>
                </div>
              ))) : (<h2 style={{textAlign:"center"}}>no items in cart</h2>)}
            </div>
            <div className="checkout_box">
              <span>Subtotal : ${localCart.reduce((acc, item) => acc + item.price * item.count, 0)}</span>
              <button className="addCartBtn" onClick={handleCheckout}>Checkout</button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ShoppingCart;

"use client";
import { useCart } from "@/context/cartContext";
import React from "react";
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
  const handleCheckout = () => {
    navigation.push("/checkout"); // Navigate to the checkout page using navigation.push
  };

  return (
    <>
      {isVisible ? (
        <>
          <div onClick={toggleCartVisibility} className="cart_overlay"></div>
          <div className="cart">
            <div className="cart_header">
              <h1>Your Cart</h1>
            </div>
            <div className="cart_items_box">
              <div className="cart_item" style={{ padding: 0 }}>
                <div
                  className="cart_img_box"
                  style={{
                    backgroundColor: "transparent",
                    borderRight: "1px solid black",
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
                    borderRight: "1px solid black",
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
              <div className="cart_item">
                <div className="cart_img_box">
                  <img src="/imgs/knife_nobg_r.png" alt="" />
                </div>
                <div className="cart_descript_box">
                  <span className="cart_item_name">hot rosin knife</span>
                  <span>
                    <span className="variant_highlight">spinel</span>
                  </span>
                  <span className="cart_item_price">price : $5000</span>
                </div>
                <div className="cart_amount_box">
                  <button>-</button>
                  <div>
                    {/* <span className="cart_amount_title">amount</span> */}
                    <span>1</span>
                  </div>
                  <button>+</button>
                </div>
              </div>
            </div>
            <div className="checkout_box">
              <span>Subtotal : 5000</span>
              <span>tax: 3%</span>
              <button onClick={handleCheckout}>Checkout</button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ShoppingCart;

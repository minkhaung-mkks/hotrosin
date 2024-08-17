"use client";
import { useCart } from "@/context/cartContext";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const CheckOut = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    email: "",
    deliveryNote: "",
    image: null,
  });
  const {
    cart,
    removeFromCart,
    clearCart,
    updateItemCount,
    updateItemVariation,
  } = useCart();
  const [localCart, setLocalCart] = useState([
    {
      name: "hot rosin knife",
      variant: "red spinel",
      price: "5000",
      count: 4,
      img: "/imgs/knife_nobg_r.png",
    },
    // Add more items if needed
  ]);

  const [pm, setPM] = useState("pp"); // Current active payment meth

  const thaiCities = [
    { value: "Bangkok", label: "Bangkok" },
    { value: "Chiang Mai", label: "Chiang Mai" },
    { value: "Phuket", label: "Phuket" },
    { value: "Pattaya", label: "Pattaya" },
    { value: "Khon Kaen", label: "Khon Kaen" },
    { value: "Nakhon Ratchasima", label: "Nakhon Ratchasima" },
    { value: "Udon Thani", label: "Udon Thani" },
    { value: "Hua Hin", label: "Hua Hin" },
    { value: "Chiang Rai", label: "Chiang Rai" },
    { value: "Rayong", label: "Rayong" },
    { value: "Ayutthaya", label: "Ayutthaya" },
    { value: "Kanchanaburi", label: "Kanchanaburi" },
    { value: "Surat Thani", label: "Surat Thani" },
    { value: "Chonburi", label: "Chonburi" },
    { value: "Krabi", label: "Krabi" },
    { value: "Songkhla", label: "Songkhla" },
    { value: "Sukhothai", label: "Sukhothai" },
    { value: "Phitsanulok", label: "Phitsanulok" },
    { value: "Nakhon Si Thammarat", label: "Nakhon Si Thammarat" },
    { value: "Trang", label: "Trang" },
    { value: "Phetchaburi", label: "Phetchaburi" },
    { value: "Lampang", label: "Lampang" },
    { value: "Mae Hong Son", label: "Mae Hong Son" },
    { value: "Samut Prakan", label: "Samut Prakan" },
    { value: "Nonthaburi", label: "Nonthaburi" },
    { value: "Samut Sakhon", label: "Samut Sakhon" },
    { value: "Samut Songkhram", label: "Samut Songkhram" },
    { value: "Ratchaburi", label: "Ratchaburi" },
    { value: "Prachuap Khiri Khan", label: "Prachuap Khiri Khan" },
    { value: "Chumphon", label: "Chumphon" },
    { value: "Nakhon Sawan", label: "Nakhon Sawan" },
    { value: "Nakhon Pathom", label: "Nakhon Pathom" },
    { value: "Saraburi", label: "Saraburi" },
    { value: "Lopburi", label: "Lopburi" },
    { value: "Phrae", label: "Phrae" },
    { value: "Nan", label: "Nan" },
    { value: "Nong Khai", label: "Nong Khai" },
    { value: "Ubon Ratchathani", label: "Ubon Ratchathani" },
    { value: "Buriram", label: "Buriram" },
    { value: "Mukdahan", label: "Mukdahan" },
    { value: "Ranong", label: "Ranong" },
    { value: "Trat", label: "Trat" },
    { value: "Satun", label: "Satun" },
    { value: "Narathiwat", label: "Narathiwat" },
    { value: "Yala", label: "Yala" },
    { value: "Pattani", label: "Pattani" },
    { value: "Sakon Nakhon", label: "Sakon Nakhon" },
    { value: "Kalasin", label: "Kalasin" },
    { value: "Roi Et", label: "Roi Et" },
  ];

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (selectedOption) => {
    handleChange("city", selectedOption);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Add your submit logic here, for example sending data to your backend
  };

  const incrementItemCount = (index) => {
    updateItemCount(index, localCart[index].count + 1);
  };

  const decrementItemCount = (index) => {
    updateItemCount(index, localCart[index].count - 1);
  };

  const handlePaymentMethodChange = (method) => {
    setPM(method); // Set the selected payment method
  };

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  return (
    <div
      style={{
        display: "flex",
      }}
      className="checkout_main"
    >
      <div className="l_form">
        <h2>Delivery Information</h2>
        <form className="shipping_form" onSubmit={handleSubmit}>
          <div className="field_box">
            <div className="name_box">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                placeholder="First Name"
              />
            </div>
            <div className="name_box">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="field_box">
            <label htmlFor="postalCode">Postal Code:</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={(e) => handleChange("postalCode", e.target.value)}
              placeholder="Postal Code"
            />
          </div>
          <div className="field_box">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="Phone Number"
            />
          </div>
          <div className="field_box">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="field_box">
            <label htmlFor="city">City:</label>
            <Select
              options={thaiCities}
              onChange={handleSelectChange}
              placeholder="Select City"
            />
          </div>
          <div className="field_box">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
              placeholder="Address"
            />
          </div>
          <div className="field_box">
            <label htmlFor="deliveryNote">Delivery Note:</label>
            <textarea
              id="deliveryNote"
              name="deliveryNote"
              value={formData.deliveryNote}
              onChange={(e) => handleChange("deliveryNote", e.target.value)}
              placeholder="Delivery Note"
            />
          </div>
          <div className="field_box">
            <label htmlFor="image">Attach your payment receipt here:</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={(e) => handleChange("image", e.target.files[0])}
            />
          </div>
          <div className="field_box">
            <label>Payment Methods:</label>
            <div className="pm_box">
              <button
                type="button"
                className={`pm_button ${pm === "pp" ? "activeButton" : ""}`}
                onClick={() => handlePaymentMethodChange("pp")}
              >
                <img
                  src="/imgs/prompt_pay.png"
                  alt="Prompt Pay"
                  className="pm_img"
                />
              </button>
              <button
                type="button"
                className={`pm_button ${pm === "bbl" ? "activeButton" : ""}`}
                onClick={() => handlePaymentMethodChange("bbl")}
              >
                <img
                  src="/imgs/bbl.jpg"
                  alt="Bangkok Bank"
                  className="pm_img"
                />
              </button>
            </div>
          </div>
          <div className="payment_box">
            {pm === "pp" ? (
              <>
                <span className="pMethod">Prompt Pay</span>
              </>
            ) : (
              <>
                <span className="pMethod">Bank Transfer</span>
                <div className="payment_info_box">
                  <span className="pInfoLabel">Bank</span>
                  <span className="pInfo"> : </span>
                  <span className="pInfo pInfoTxt">Bangkok Bank</span>
                </div>
                <div className="payment_info_box">
                  <span className="pInfoLabel">Account Number</span>
                  <span className="pInfo">:</span>
                  <span className="pInfo pInfoTxt">12003120310201</span>
                </div>
                <div className="payment_info_box">
                  <span className="pInfoLabel">Account Name</span>
                  <span className="pInfo"> : </span>
                  <span className="pInfo pInfoTxt">Khin Maung Nyunt</span>
                </div>
              </>
            )}
          </div>
        </form>
      </div>

      <div
        className="r_form"
      >
        <h2>Your Cart</h2>
        <div
          className="cart_items_box checkout_cart_item_box"
          style={{ border: "0px solid black" }}
        >
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
              <span className="cart_item_name" style={{ textAlign: "center" }}>
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
          {localCart.map((item, index) => (
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
                <button onClick={() => decrementItemCount(index)}>-</button>
                <div>
                  <span>{item.count}</span>
                </div>
                <button onClick={() => incrementItemCount(index)}>+</button>
              </div>
            </div>
          ))}
        </div>
        <div className="checkout_total_box">
          <span className="pInfo">
            subtotal:
            <span>
              ${" "}
              {localCart.reduce(
                (acc, item) => acc + item.price * item.count,
                0
              )}
            </span>
          </span>
          <span className="pInfo">
            taxes:
            <span>
              $ {" "}
              {localCart
                .reduce((acc, item) => acc + item.price * item.count * 0.03, 0)
                .toFixed(2)}{" "}
              (3%)
            </span>
          </span>
          <span className="pInfo">
            delivery fee:
            <span>$ 100</span>
          </span>
          <span className="pInfo">
            total price:
            <span>
              $ {" "}
              {localCart
                .reduce(
                  (acc, item) => acc + item.price * item.count * 1.03 + 100,
                  0
                )
                .toFixed(2)}
            </span>
          </span>
          <button className="addCartBtn" type="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

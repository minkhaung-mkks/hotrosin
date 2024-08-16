"use client";
import React, { useState } from "react";
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

  const [pm, setPM] = useState('pp')

  const cartItems = [
    {
      name: "hot rosin knife",
      variant: "red spinel",
      price: "5000",
      count: "4",
    },
  ];

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
    // Add more cities from the comprehensive list provided
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

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        marginTop: "6vh",
      }}
    >
      <div className="l_form" style={{ flex: 1, marginRight: "20px" }}>
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
            <label htmlFor="image">Attach your payment recipet here:</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={(e) => handleChange("image", e.target.files[0])}
            />
          </div>
          <div className="field_box">
            <label htmlFor="">Payment Methods:</label>
            <div className="pm_box">
              <button>
                <img src="/imgs/prompt_pay.png" alt="" className="pm_img pp" />
              </button>
              <button>
                <img src="/imgs/bbl.jpg" alt="" className="pm_img pp" />
              </button>
            </div>
          </div>
          <div className="payment_box">
            {pm=="pp" ? (
              <>
              <span className="pMethod">Prompt Pay</span>
            </>
            ) : (
              <>
              <span className="pMethod">Bank Transfer</span>
            <div className="payment_info_box">
              <span className="pInfoLabel">Bank </span>
              <span className="pInfo"> : </span>
              <span className="pInfo pInfoTxt">Bangkok Bank</span>
            </div>
            <div className="payment_info_box">
              <span className="pInfoLabel">Account Number</span>
              <span className="pInfo">:</span>
              <span className="pInfo pInfoTxt">12003120310201</span>
            </div>
            <div className="payment_info_box">
              <span className="pInfoLabel">Account Name </span>
              <span className="pInfo"> : </span>
              <span className="pInfo pInfoTxt">Khin Maung Nyunt</span>
            </div>
              </>
            )}
          </div>
        </form>
      </div>

      <div
        style={{
          flex: 1,
          marginLeft: "20px",
          padding: "1vh 2vw",
        }}
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
          {cartItems.map((item, index) => (
            <div className="cart_item">
              <div className="cart_img_box">
                <img src="/imgs/knife_nobg_r.png" alt="" />
              </div>
              <div className="cart_descript_box">
                <span className="cart_item_name">{item.name}</span>
                <span>
                  <span className="variant_highlight">{item.variant}</span>
                </span>
                <span className="cart_item_price">price : ${item.price}</span>
              </div>
              <div className="cart_amount_box">
                <button>-</button>
                <div>
                  {/* <span className="cart_amount_title">amount</span> */}
                  <span>{item.count}</span>
                </div>
                <button>+</button>
              </div>
            </div>
          ))}
        </div>
        <div className="checkout_total_box">
          <span>total:</span>
          <span>taxes:</span>
          <span>total:</span>
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

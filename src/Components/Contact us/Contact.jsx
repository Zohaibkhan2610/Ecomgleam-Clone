import React, { useState } from "react";
import Contactmap from "./contact map.webp";
import "./Contactus.css";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    orderId: "",
    deliveryDestination: "",
    streetAddress: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "pakistan", // Set default country to Pakistan
    orderDate: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log(formData);
  };

  return (
    <>
      <div className="contact">
        <div className="map-img">
          <img src={Contactmap} alt="" />
        </div>
        <div className="contact-form">
          <h1>Order/Delivery Tracking</h1>
          <form onSubmit={handleSubmit}>
            <h2>Personal Information</h2>
            <label for="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <label for="contact-number">Contact number:</label>
            <input
              type="tel"
              id="contact-number"
              name="contact-number"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <h2>Order Information</h2>
            <label for="order-id">Order ID:</label>
            <input
              type="text"
              id="order-id"
              name="order-id"
              value={formData.orderId}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <label for="delivery-destination">Delivery destination:</label>
            <input
              type="text"
              id="delivery-destination"
              name="delivery-destination"
              value={formData.deliveryDestination}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <label for="street-address">Street Address:</label>
            <input
              type="text"
              id="street-address"
              name="street-address"
              value={formData.streetAddress}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <label for="address-line-2">Address Line 2:</label>
            <input
              type="text"
              id="address-line-2"
              name="address-line-2"
              value={formData.addressLine2}
              onChange={handleChange}
            />
            <br />
            <br />
            <label for="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <label for="state">State/Region/Province:</label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="select">-Select-</option>
              {/* Add more state options here */}
            </select>
            <br />
            <br />
            <label for="postal-code">Postal/Zip Code:</label>
            <input
              type="text"
              id="postal-code"
              name="postal-code"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <label for="country">Country:</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="pakistan">Pakistan</option>
              {/* Add more country options here */}
            </select>
            <br />
            <br />
            <label for="order-date">When did you place your order?</label>
            <input
              type="date"
              id="order-date"
              name="order-date"
              value={formData.orderDate}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <button type="Submit" id="Submit">Submit</button>          
            </form>
        </div>
      </div>
    </>
  );
}

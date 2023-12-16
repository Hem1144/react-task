import React, { useState } from "react";
import "./Form.css";

const provinces = [
  "Koshi Province",
  "Madesh Province",
  "Bagmati Province",
  "Gandaki Province",
  "Lumbini Provience",
  "Karnali Province",
  "Sudurpashchim Province",
];

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    dob: "",
    address: {
      city: "",
      district: "",
      province: provinces[0],
      country: "Nepal",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [name]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="dob">DOB:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.address.city}
          onChange={handleAddressChange}
        />
      </div>
      <div>
        <label htmlFor="district">District:</label>
        <input
          type="text"
          id="district"
          name="district"
          value={formData.address.district}
          onChange={handleAddressChange}
        />
      </div>
      <div>
        <label htmlFor="province">Province:</label>
        <select
          id="province"
          name="province"
          value={formData.address.province}
          onChange={handleAddressChange}
        >
          {provinces.map((province, index) => (
            <option key={index} value={province}>
              {province}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.address.country}
          disabled
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;

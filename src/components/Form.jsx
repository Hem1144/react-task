import React, { useState } from "react";
import "../styles/Form.css";
import { v1 as uuidv1 } from "uuid";

const provinces = [
  "Koshi Province",
  "Madhesh Province",
  "Bagmati Province",
  "Gandaki Province",
  "Lumbini Provience",
  "Karnali Province",
  "Sudurpashchim Province",
];

const Form = ({ addUser, setSingleData, singleData }) => {
  const [formData, setFormData] = useState({
    name: singleData?.name || "",
    email: singleData?.email || "",
    phoneNumber: singleData?.phoneNumber || "",
    dob: singleData?.dob || "",
    address: {
      city: singleData?.address.city || "",
      district: singleData?.address.district || "",
      province: singleData?.address.province || "",
      country: "Nepal",
    },
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phoneNumber } = formData;

    let errorsObj = { name: "", email: "", phoneNumber: "" };

    if (!name.trim()) {
      errorsObj.name = "Name is required";
    }

    if (!email.trim()) {
      errorsObj.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errorsObj.email = "Invalid email format";
    }

    if (!phoneNumber.trim()) {
      errorsObj.phoneNumber = "Phone Number is required";
    } else if (!/^\d{7,}$/.test(phoneNumber)) {
      errorsObj.phoneNumber =
        "Phone number must be at least 7 digits and only numbers";
    }

    setErrors(errorsObj);

    if (!(errorsObj.name || errorsObj.email || errorsObj.phoneNumber)) {
      const id = uuidv1();
      const user = { ...formData, id };

      addUser(user);

      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        dob: "",
        address: {
          city: "",
          district: "",
          province: "",
          country: "Nepal",
        },
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (Object.keys(singleData).length > 0) {
      setSingleData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value,
      },
    }));
    if (Object.keys(singleData).length > 0) {
      setSingleData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          [name]: value,
        },
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label htmlFor="name">
          <span className="require">* </span>Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">
          <span className="require">* </span>Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="phoneNumber">
          <span className="require">* </span>Phone Number:
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && (
          <span className="error">{errors.phoneNumber}</span>
        )}
      </div>{" "}
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
          <option>Select</option>
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
      {!singleData && <button type="submit">Submit</button>}
    </form>
  );
};
export default Form;

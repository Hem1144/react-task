import React, { useState } from "react";
import "../styles/Form.css";

const provinces = [
  "Koshi Province",
  "Madhesh Province",
  "Bagmati Province",
  "Gandaki Province",
  "Lumbini Provience",
  "Karnali Province",
  "Sudurpashchim Province",
];

const Form = ({ addUser }) => {
  const [formData, setFormData] = useState({
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

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [data, setData] = useState([]);

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
    const { name, email, phoneNumber } = formData;

    let errorsObj = { ...errors };

    setErrors(errorsObj);

    if (!errorsObj.name && !errorsObj.email && !errorsObj.phoneNumber) {
      addUser(formData);
      localStorage.setItem("userData", JSON.stringify([...data, formData]));
      setFormData({
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

      if (!name.trim()) {
        errorsObj = { ...errorsObj, name: "Name is required" };
      } else {
        errorsObj = { ...errorsObj, name: "" };
      }

      if (!email.trim()) {
        errorsObj = { ...errorsObj, email: "Email is required" };
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorsObj = { ...errorsObj, email: "Invalid email format" };
      } else {
        errorsObj = { ...errorsObj, email: "" };
      }

      if (!phoneNumber.trim()) {
        errorsObj = { ...errorsObj, phoneNumber: "Phone Number is required" };
      } else if (!/^\d{7,}$/.test(phoneNumber)) {
        errorsObj = {
          ...errorsObj,
          phoneNumber:
            "Phone number must be at least 7 digits and only numbers",
        };
      } else {
        errorsObj = { ...errorsObj, phoneNumber: "" };
      }

      setErrors(errorsObj);
      setData([...data, formData]);
      if (!errorsObj.name && !errorsObj.email && !errorsObj.phoneNumber) {
        localStorage.setItem("userData", JSON.stringify(data));
      }
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
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;

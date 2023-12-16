import React, { useState } from "react";
import "./Form.css";

const Form = ({ addEntry }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.phoneNumber) {
      addEntry(formData);
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
      });
    } else {
      alert("Please provide the necessary fields !");
    }
  };

  return <form onSubmit={handleSubmit}></form>;
};

export default Form;

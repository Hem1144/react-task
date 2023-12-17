import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import Form from "../components/Form";

const Home = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setUserData(storedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);
  const addUser = (newUser) => {
    setUserData([...userData, newUser]);
  };

  const editUser = (index, updatedUser) => {};

  const deleteUser = (index) => {};

  const sortUsers = () => {};

  return (
    <div>
      <h2
        style={{ textAlign: "center", justifyContent: "center", color: "blue" }}
      >
        User List Table
      </h2>
      <Form addUser={addUser} />
      {<Table userData={userData} />}
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import Form from "../components/Form";
import { Link } from "react-router-dom";

const Home = ({ deleteUser }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setUserData(storedData);
    }
  }, []);

  const addUser = (newUser) => {
    const updatedData = [...userData, newUser];
    localStorage.setItem("userData", JSON.stringify(updatedData));
    setUserData(updatedData);
  };

  const editUser = (index, updatedUser) => {
    const updatedData = [...userData];
    updatedData[index] = updatedUser;
    localStorage.setItem("userData", JSON.stringify(updatedData));
    setUserData(updatedData);
  };

  // const deleteUser = (id) => {
  //   const updatedData = userData.filter((user) => user.id !== id);
  //   localStorage.setItem("userData", JSON.stringify(updatedData));
  //   setUserData(updatedData);
  // };

  return (
    <div>
      <h2 style={{ textAlign: "center", color: "blue" }}>User List Table</h2>
      <Form addUser={addUser} />
      <Table
        userData={userData}
        deleteUser={deleteUser}
        handleEdit={editUser}
      />
      <Link to="/profiles">
        <button className="view-profiles-button">View Profiles</button>
      </Link>
    </div>
  );
};

export default Home;

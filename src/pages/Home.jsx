import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import Form from "../components/Form";

const Home = () => {
  const [userData, setUserData] = useState([]);
  console.log("userData", userData);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setUserData(storedData);
    }
  }, []);

  const addUser = (newUser) => {
    const updatedData = [...userData, newUser];

    setUserData(updatedData);
    localStorage.setItem("userData", JSON.stringify(updatedData));
  };

  const editUser = (index, updatedUser) => {
    const updatedData = [...userData];
    updatedData[index] = updatedUser;
    setUserData(updatedData);
    localStorage.setItem("userData", JSON.stringify(updatedData));
  };

  const deleteUser = (index) => {
    const updatedData = userData.filter((user, i) => i !== index);
    setUserData(updatedData);
    localStorage.setItem("userData", JSON.stringify(updatedData));
  };

  const sortUsers = () => {
    const sortedData = [...userData].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setUserData(sortedData);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", color: "blue" }}>User List Table</h2>
      <Form addUser={addUser} />
      <Table
        userData={userData}
        handleDelete={deleteUser}
        handleEdit={editUser}
        handleSort={sortUsers}
      />
    </div>
  );
};

export default Home;

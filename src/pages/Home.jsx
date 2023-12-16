import React, { useState, useEffect } from "react";
import Table from "../components/Table";

const Home = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    console.log(storedData);
    if (storedData) {
      setUserData(storedData);
    }
  }, []);

  // const addUser = (newUser) => {
  //   const updatedData = [...userData, newUser];
  //   setUserData(updatedData);
  //   localStorage.setItem("userData", JSON.stringify(updatedData));
  // };

  // const editUser = (index, updatedUser) => {};

  // const deleteUser = (index) => {};

  // const sortUsers = () => {};

  return <div>{<Table userData={userData} />}</div>;
};

export default Home;

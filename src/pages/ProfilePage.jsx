import { useEffect, useState } from "react";
import Table from "../components/Table";
import Popup from "../components/Modal";

const ProfilePage = () => {
  const [userData, setUserData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [singleData, setSingleData] = useState({});

  const handleOk = () => {
    const updatedArray = userData.map((item) => {
      if (item.id === singleData.id) {
        return singleData;
      }
      return item;
    });
    setUserData(updatedArray);
    localStorage.setItem("userData", JSON.stringify(updatedArray));

    setShowModal(false);
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setUserData(storedData);
    }
  }, [singleData]);

  const deleteUser = (id) => {
    const updatedData = userData.filter((user) => user.id !== id);
    localStorage.setItem("userData", JSON.stringify(updatedData));
    setUserData(updatedData);
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", color: "blue" }}>Profiles</h3>
      <Table
        deleteUser={deleteUser}
        userData={userData}
        handleOk={handleOk}
        setShowModal={setShowModal}
        setSingleData={setSingleData}
        setUserData={setUserData}
      />
      <Popup
        setShowModal={setShowModal}
        showModal={showModal}
        setSingleData={setSingleData}
        singleData={singleData}
        handleOk={handleOk}
      />
      <br />
    </div>
  );
};

export default ProfilePage;

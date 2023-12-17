import { useEffect, useState } from "react";
import Table from "../components/Table";
import Popup from "../components/Modal";

const ProfilePage = () => {
  const [userData, setUserData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setUserData(storedData);
    }
  }, []);
  return (
    <div>
      <h3>Profiles</h3>
      <Table userData={userData} />
    </div>
  );
};

export default ProfilePage;

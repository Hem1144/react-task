import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Table.css";
import Popup from "./Modal";

const Table = ({ userData, handleDelete, handleSort }) => {
  const [showModal, setShowModal] = useState(false);
  const [singleData, setSingleData] = useState({});

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th onClick={handleSort} className="sortable-header">
              Name ▼
            </th>
            <th className="email-header">Email</th>
            <th className="phone-header">Phone Number</th>
            <th className="dob-header">DOB</th>
            <th className="address-header">Address</th>
            <th className="action-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.length > 0 &&
            userData.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.dob}</td>
                <td>{user.address.city}</td>
                <td>
                  <button
                    onClick={() => handleDelete(index)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                  <button
                    className="edit-button"
                    onClick={() => {
                      setShowModal(true), setSingleData(user);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Popup
        showModal={showModal}
        singleUser={singleData}
        setShowModal={setShowModal}
      />
      <br />
      <Link to="/profiles">
        <button className="view-profiles-button">View Profiles</button>
      </Link>
    </div>
  );
};

export default Table;

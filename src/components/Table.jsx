import React from "react";
import { Link } from "react-router-dom";
import "../styles/Table.css";

const Table = ({ userData, handleDelete, handleSort }) => {
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
          {userData.map((user, index) => (
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
                <Link to={`/edit/${index}`}>
                  <button className="edit-button">Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <Link to="/profiles">
        <button className="view-profiles-button">View Profiles</button>
      </Link>
    </div>
  );
};

export default Table;

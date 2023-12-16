// TableComponent.jsx
import React from "react";
import { Link } from "react-router-dom";

const Table = ({ userData, handleDelete, handleSort }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={handleSort}>Name ▼</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
                <Link to={`/edit/${index}`}>
                  <button>Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/profiles">
        <button>View Profiles</button>
      </Link>
    </div>
  );
};

export default Table;

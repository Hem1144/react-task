import "../styles/Table.css";

const Table = ({
  userData,
  deleteUser,
  setUserData,
  setShowModal,
  setSingleData,
}) => {
  const handleSorting = () => {
    const sortedData = [...userData].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    localStorage.setItem("userData", JSON.stringify(sortedData));
    setUserData(sortedData);
  };

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th onClick={() => handleSorting()} className="sortable-header">
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
          {userData &&
            userData.length > 0 &&
            userData.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.dob}</td>
                <td>{user.address.city}</td>
                <td>
                  <button
                    onClick={() => deleteUser(user.id)}
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
    </div>
  );
};

export default Table;

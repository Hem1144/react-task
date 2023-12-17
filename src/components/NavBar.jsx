import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/profiles" className="nav-link">
            Profiles
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/addUser" className="nav-link">
            AddUser
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

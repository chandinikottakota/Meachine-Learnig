import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for Navbar component

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
       
        <li className="navbar-item">
          <Link to="/dataingestion" className="navbar-link">
            Admissions
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/DataVisualization" className="navbar-link">
            Accuracy
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Add any styling here

const HomeComponent = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Vehicle Rental App</h1>
      <div className="button-container">
        <Link to="/login">
          <button className="home-button">Login</button>
        </Link>
        <Link to="/signup">
          <button className="home-button">Signup</button>
        </Link>
        <Link to="/admin/login">
          <button className="home-button admin-login">Admin Login</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeComponent;

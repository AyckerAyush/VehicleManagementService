import React, { useState } from 'react';
import './styles.css'; // You can style the form here

const AdminLoginPage = () => {
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const handleAdminLogin = (e) => {
    e.preventDefault();
    // Handle admin login here
    console.log('Admin logging in with:', adminUsername, adminPassword);
    // Add admin login logic here
  };

  return (
    <div className="form-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleAdminLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter admin username"
            value={adminUsername}
            onChange={(e) => setAdminUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter admin password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
  );
};

export default AdminLoginPage;

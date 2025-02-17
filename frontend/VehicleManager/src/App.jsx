import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import AdminLoginPage from './components/AdminLoginPage';
import AvailableVehiclesPage from './components/AvailableVehiclesPage'; // Import the new page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/available-vehicles" element={<AvailableVehiclesPage />} /> {/* Add route */}
      </Routes>
    </Router>
  );
};

export default App;

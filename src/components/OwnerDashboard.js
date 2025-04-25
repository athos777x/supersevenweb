import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../css/Dashboard.css';

const OwnerDashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Owner Dashboard</h1>
        <div className="user-info">
          <span>Welcome, {currentUser?.name}</span>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-card">
          <h2>Business Analytics</h2>
          <p>View financial reports and analytics</p>
          <button className="action-button">View Reports</button>
        </div>

        <div className="dashboard-card">
          <h2>Staff Management</h2>
          <p>Manage photographers and staff</p>
          <button className="action-button">Manage Staff</button>
        </div>

        <div className="dashboard-card">
          <h2>Financial Overview</h2>
          <p>Review income and expenses</p>
          <button className="action-button">Financial Dashboard</button>
        </div>

        <div className="dashboard-card">
          <h2>Business Settings</h2>
          <p>Configure business settings and preferences</p>
          <button className="action-button">Settings</button>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard; 
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../css/Dashboard.css';

const PhotographerDashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Photographer/Editor Dashboard</h1>
        <div className="user-info">
          <span>Welcome, {currentUser?.name}</span>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-card">
          <h2>Upcoming Sessions</h2>
          <p>View and manage your upcoming photoshoots</p>
          <button className="action-button">View Schedule</button>
        </div>

        <div className="dashboard-card">
          <h2>Photo Editing</h2>
          <p>Edit and process client photos</p>
          <button className="action-button">Open Editor</button>
        </div>

        <div className="dashboard-card">
          <h2>Client Galleries</h2>
          <p>Manage and upload client photo galleries</p>
          <button className="action-button">Manage Galleries</button>
        </div>

        <div className="dashboard-card">
          <h2>Equipment Inventory</h2>
          <p>View and manage photography equipment</p>
          <button className="action-button">View Inventory</button>
        </div>
      </div>
    </div>
  );
};

export default PhotographerDashboard; 
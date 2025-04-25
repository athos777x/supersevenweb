import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../css/Dashboard.css';

const ClientDashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Client Dashboard</h1>
        <div className="user-info">
          <span>Welcome, {currentUser?.name}</span>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-card">
          <h2>My Photo Galleries</h2>
          <p>View and download your photo collections</p>
          <button className="action-button">View Galleries</button>
        </div>

        <div className="dashboard-card">
          <h2>Upcoming Sessions</h2>
          <p>View your scheduled photo sessions</p>
          <button className="action-button">View Schedule</button>
        </div>

        <div className="dashboard-card">
          <h2>Message Photographer</h2>
          <p>Communicate with your photographer</p>
          <button className="action-button">Send Message</button>
        </div>

        <div className="dashboard-card">
          <h2>Order Prints</h2>
          <p>Order prints of your favorite photos</p>
          <button className="action-button">Shop Prints</button>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard; 
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../css/Dashboard.css';

const SecretaryDashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Secretary Dashboard</h1>
        <div className="user-info">
          <span>Welcome, {currentUser?.name}</span>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-card">
          <h2>Appointment Management</h2>
          <p>Schedule and manage client appointments</p>
          <button className="action-button">Manage Appointments</button>
        </div>

        <div className="dashboard-card">
          <h2>Client Communication</h2>
          <p>Send messages to clients</p>
          <button className="action-button">Open Messages</button>
        </div>

        <div className="dashboard-card">
          <h2>Session Scheduling</h2>
          <p>Schedule photography sessions</p>
          <button className="action-button">Schedule Sessions</button>
        </div>

        <div className="dashboard-card">
          <h2>Booking Calendar</h2>
          <p>View and manage the booking calendar</p>
          <button className="action-button">Open Calendar</button>
        </div>
      </div>
    </div>
  );
};

export default SecretaryDashboard; 
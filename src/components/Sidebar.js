import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../css/Layout.css';

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <span className="company-name">SUPERSEVEN<span className="studio">STUDIO</span></span>
      </div>

      <nav className="nav-menu">
        <NavLink to="/home" className="nav-item">
          <div className="nav-icon">
            <i className="fas fa-home"></i>
          </div>
          <span>Home</span>
        </NavLink>

        <NavLink to="/accounts" className="nav-item">
          <div className="nav-icon">
            <i className="fas fa-user"></i>
          </div>
          <span>Accounts</span>
        </NavLink>

        <NavLink to="/booking" className="nav-item">
          <div className="nav-icon">
            <i className="fas fa-calendar"></i>
          </div>
          <span>Booking</span>
        </NavLink>

        <NavLink to="/workload" className="nav-item">
          <div className="nav-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <span>Workload</span>
        </NavLink>

        <NavLink to="/package" className="nav-item">
          <div className="nav-icon">
            <i className="fas fa-box"></i>
          </div>
          <span>Package</span>
        </NavLink>

        <NavLink to="/billing" className="nav-item">
          <div className="nav-icon">
            <i className="fas fa-file-invoice-dollar"></i>
          </div>
          <span>Billing</span>
        </NavLink>

        <NavLink to="/feedback" className="nav-item">
          <div className="nav-icon">
            <i className="fas fa-comment"></i>
          </div>
          <span>Feedback</span>
        </NavLink>

        <NavLink to="/reports" className="nav-item">
          <div className="nav-icon">
            <i className="fas fa-chart-bar"></i>
          </div>
          <span>Reports</span>
        </NavLink>

        <NavLink to="/settings" className="nav-item">
          <div className="nav-icon">
            <i className="fas fa-cog"></i>
          </div>
          <span>Settings</span>
        </NavLink>

        <div className="nav-item" onClick={handleLogout}>
          <div className="nav-icon">
            <i className="fas fa-sign-out-alt"></i>
          </div>
          <span>Logout</span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar; 
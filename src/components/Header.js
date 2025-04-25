import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../css/Layout.css';

const Header = ({ title }) => {
  const { currentUser } = useAuth();

  // Capitalize first letter of role for display
  const formatRole = (role) => {
    if (!role) return 'Guest';
    return role.charAt(0).toUpperCase() + role.slice(1);
  };

  return (
    <header className="header">
      <h1 className="page-title">{title || 'Home'}</h1>
      <div className="user-profile">
        <div className="profile-avatar">
          <img 
            src="https://i.pravatar.cc/150?img=50" 
            alt="Profile Avatar" 
            className="avatar-image"
          />
        </div>
        <div className="profile-info">
          <div className="profile-name">Welcome, {currentUser?.name || 'Guest'}</div>
          <div className="profile-role">{formatRole(currentUser?.role)}</div>
        </div>
      </div>
    </header>
  );
};

export default Header; 
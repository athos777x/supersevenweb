import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Unauthorized = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const goBack = () => {
    if (currentUser) {
      switch (currentUser.role) {
        case 'secretary':
          navigate('/secretary-dashboard');
          break;
        case 'owner':
          navigate('/owner-dashboard');
          break;
        case 'photographer':
          navigate('/photographer-dashboard');
          break;
        case 'client':
          navigate('/client-dashboard');
          break;
        default:
          navigate('/');
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="unauthorized-container">
      <h1>Access Denied</h1>
      <p>You do not have permission to access this page.</p>
      <button onClick={goBack} className="back-button">
        Return to Dashboard
      </button>
    </div>
  );
};

export default Unauthorized; 
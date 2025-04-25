import React from 'react';
import Layout from './Layout';
import { useAuth } from '../contexts/AuthContext';
import '../css/Home.css';

const Home = () => {
  const { currentUser } = useAuth();
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  // Role-specific welcome messages
  const getRoleMessage = () => {
    if (!currentUser) return '';
    
    switch(currentUser.role) {
      case 'secretary':
        return 'Manage appointments and client communications';
      case 'owner':
        return 'View financial reports and manage your photography business';
      case 'photographer':
        return 'Manage your shooting schedule and photo editing tasks';
      case 'client':
        return 'View your photo galleries and upcoming sessions';
      default:
        return 'Explore your dashboard and manage your photography studio';
    }
  };

  return (
    <Layout title="Home">
      <div className="home-wrapper">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="date-display">Today, {formattedDate}</div>
          <div className="hero-content">
            <div className="hero-text">
              <h2 className="hero-title">Welcome to SuperSeven Studio</h2>
              <p className="hero-description">{getRoleMessage()}</p>
              <button className="view-packages-btn">View Packages</button>
            </div>
          </div>
          <div className="hero-navigation">
            <button className="nav-arrow prev-arrow">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="nav-arrow next-arrow">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="gallery-section">
          <div className="gallery-item">
            <div className="gallery-image wedding-image"></div>
            <h3 className="gallery-title">Kai and Patrick Wedding</h3>
            <button className="view-more-btn">View More</button>
          </div>

          <div className="gallery-item">
            <div className="gallery-image prenup-image"></div>
            <h3 className="gallery-title">Harold and Lonie Prenup</h3>
            <button className="view-more-btn">View More</button>
          </div>

          <div className="gallery-item">
            <div className="gallery-image birthday-image"></div>
            <h3 className="gallery-title">José Marie's Birthday</h3>
            <button className="view-more-btn">View More</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home; 
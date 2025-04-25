import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import '../css/Layout.css';

const Layout = ({ children, title }) => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-area">
        <Header title={title} />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout; 
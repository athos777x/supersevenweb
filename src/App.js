import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import SecretaryDashboard from './components/SecretaryDashboard';
import OwnerDashboard from './components/OwnerDashboard';
import PhotographerDashboard from './components/PhotographerDashboard';
import ClientDashboard from './components/ClientDashboard';
import Unauthorized from './components/Unauthorized';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider, ROLES } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            
            <Route 
              path="/secretary-dashboard" 
              element={
                <ProtectedRoute requiredRole={ROLES.SECRETARY}>
                  <SecretaryDashboard />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/owner-dashboard" 
              element={
                <ProtectedRoute requiredRole={ROLES.OWNER}>
                  <OwnerDashboard />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/photographer-dashboard" 
              element={
                <ProtectedRoute requiredRole={ROLES.PHOTOGRAPHER}>
                  <PhotographerDashboard />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/client-dashboard" 
              element={
                <ProtectedRoute requiredRole={ROLES.CLIENT}>
                  <ClientDashboard />
                </ProtectedRoute>
              } 
            />
            
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../css/LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, isAuthenticated, currentUser } = useAuth();
  const navigate = useNavigate();

  const redirectBasedOnRole = useCallback((role) => {
    switch (role) {
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
        navigate('/dashboard');
    }
  }, [navigate]);

  useEffect(() => {
    // If user is already authenticated, redirect based on their role
    if (isAuthenticated && currentUser) {
      redirectBasedOnRole(currentUser.role);
    }
  }, [isAuthenticated, currentUser, redirectBasedOnRole]);

  const handleSignIn = (e) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    const result = login(email, password);
    
    if (result.success) {
      // Redirect will be handled by the useEffect
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login to Account</h1>
      <p className="login-subtitle">Please enter your email and password to continue</p>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSignIn}>
        <div className="input-group">
          <label className="input-label">Email address:</label>
          <input 
            type="email" 
            className="text-input" 
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="input-group">
          <div className="password-header">
            <label className="input-label">Password:</label>
            <a href="#forgot-password" className="forgot-password">Forget Password?</a>
          </div>
          <input 
            type="password" 
            className="text-input"
            placeholder="••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <div className="checkbox-container">
          <input 
            type="checkbox" 
            id="remember-password" 
            className="checkbox"
            checked={rememberPassword}
            onChange={(e) => setRememberPassword(e.target.checked)}
          />
          <label htmlFor="remember-password" className="checkbox-label">Remember Password</label>
        </div>
        
        <button type="submit" className="sign-in-button">Sign In</button>
      </form>
      
      <p className="login-helper">
        <strong>Available test accounts:</strong><br />
        Secretary: secretary@example.com / secretary123<br />
        Owner: owner@example.com / owner123<br />
        Photographer: photographer@example.com / photo123<br />
        Client: client@example.com / client123
      </p>
      
      <p className="create-account-text">
        Don't have an account? <a href="#create-account" className="create-account-link">Create Account</a>
      </p>
    </div>
  );
};

export default LoginPage; 
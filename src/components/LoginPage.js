import React, { useState } from 'react';
import '../css/LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);

  // Mock data for authentication (for demonstration purposes only)
  const mockUsers = [
    { email: 'admin@gmail.com', password: 'admin' }
  ];

  const handleSignIn = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }
    
    // Check against mock data
    const user = mockUsers.find(user => user.email === email && user.password === password);
    
    if (user) {
      alert('Login successful!');
      // In a real app, you would handle authentication state, redirects, etc.
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login to Account</h1>
      <p className="login-subtitle">Please enter your email and password to continue</p>
      
      <form onSubmit={handleSignIn}>
        <div className="input-group">
          <label className="input-label">Email address:</label>
          <input 
            type="email" 
            className="text-input" 
            placeholder="admin@gmail.com"
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
      
      <p className="create-account-text">
        Don't have an account? <a href="#create-account" className="create-account-link">Create Account</a>
      </p>
    </div>
  );
};

export default LoginPage; 
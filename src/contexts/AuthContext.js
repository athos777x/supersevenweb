import React, { createContext, useState, useContext, useEffect } from 'react';

// Define roles
export const ROLES = {
  SECRETARY: 'secretary',
  OWNER: 'owner',
  PHOTOGRAPHER: 'photographer',
  CLIENT: 'client'
};

// Mock users with roles
const mockUsers = [
  { email: 'secretary@example.com', password: 'secretary123', role: ROLES.SECRETARY, name: 'Sarah Secretary' },
  { email: 'owner@example.com', password: 'owner123', role: ROLES.OWNER, name: 'Oliver Owner' },
  { email: 'photographer@example.com', password: 'photo123', role: ROLES.PHOTOGRAPHER, name: 'Peter Photographer' },
  { email: 'client@example.com', password: 'client123', role: ROLES.CLIENT, name: 'Clara Client' }
];

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for saved user in local storage on initial load
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const user = mockUsers.find(user => user.email === email && user.password === password);
    
    if (user) {
      // Create a user object without the password
      const authenticatedUser = {
        email: user.email,
        role: user.role,
        name: user.name
      };
      
      setCurrentUser(authenticatedUser);
      localStorage.setItem('currentUser', JSON.stringify(authenticatedUser));
      return { success: true, user: authenticatedUser };
    }
    
    return { success: false, error: 'Invalid email or password' };
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  const hasRole = (requiredRole) => {
    if (!currentUser) return false;
    return currentUser.role === requiredRole;
  };

  const value = {
    currentUser,
    login,
    logout,
    hasRole,
    isAuthenticated: !!currentUser,
    roles: ROLES
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext; 
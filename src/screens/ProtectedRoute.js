import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
};

export const ProtectedSignUp = ({ children }) => {
  const { user } = UserAuth();

  if (user) {
    alert('Logout First');
    return <Navigate to='/homepage'/>;
  }
  return children;
};

export const ProtectedLoginScreen = ({ children }) => {
  const { user } = UserAuth();

  if (user) {
    alert('Logout First');
    return <Navigate to='/homepage'/>;
  }
  
  return children;
};

export default ProtectedRoute;

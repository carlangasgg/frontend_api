// src/components/auth/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import authService from '../../services/authService'; // Adjust path as needed

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = !!authService.getCurrentUser();

  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
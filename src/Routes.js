// src/routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage.js';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/auth/PrivateRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
    </Routes>
  );
};

export default AppRoutes;

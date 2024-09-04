// src/services/authService.js

import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/';

const register = (email, password, password_confirmation) => {
  return axios.post(`${API_URL}users`, {
    user: {
      email,
      password,
      password_confirmation
    }
  }, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
};

const login = (email, password) => {
  return axios.post(`${API_URL}users/sign_in`, {
    user: {
      email,
      password
    }
  }).then(response => {
    if (response.data.jwt) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  });
};

const logout = () => {
  return axios.delete(`${API_URL}users/sign_out`, {
    headers: { 'Authorization': `Bearer ${getToken()}` }
  }).then(() => {
    localStorage.removeItem('user');
  });
};

const getToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user ? user.jwt : null;
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export default {
  register,
  login,
  logout,
  getCurrentUser
};

// src/services/authService.js

import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/';

// Get tokens from localStorage
const getAuthHeaders = () => {
  return {
    'access-token': localStorage.getItem('access-token'),
    'client': localStorage.getItem('client'),
    'uid': localStorage.getItem('uid'),
    'token-type': 'Bearer',
    'Content-Type': 'application/json',
  };
};

// Fetch protected data (example of an authenticated request)
const fetchProtectedData = async () => {
  try {
    const headers = getAuthHeaders(); // Retrieve the stored headers
    const response = await axios.get(`${API_URL}protected_route`, { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching protected data:', error);
    throw error;
  }
};

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
      'Accept': 'application/json'
    }
  });
};

const login = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}users/sign_in`,
      {
        email,
        password
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const { headers, data } = response;

    // Store tokens in localStorage
    localStorage.setItem('access-token', headers['access-token']);
    localStorage.setItem('client', headers['client']);
    localStorage.setItem('uid', headers['uid']);
    localStorage.setItem('user', JSON.stringify(data.data));

    return data;
  } catch (error) {
    throw new Error('Failed to login. Please check your credentials.');
  }
};

const logout = async () => {
  try {
    await axios.delete(`${API_URL}users/sign_out`, {
      headers: {
        'Authorization': `Bearer ${getToken()}`,
        'client': localStorage.getItem('client'),
        'uid': localStorage.getItem('uid')
      }
    });

    // Clear tokens from localStorage
    localStorage.removeItem('access-token');
    localStorage.removeItem('client');
    localStorage.removeItem('uid');
    localStorage.removeItem('user');
  } catch (error) {
    throw new Error('Failed to logout.');
  }
};

const getToken = () => {
  return localStorage.getItem('access-token');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
  fetchProtectedData // Make sure to export the function so you can use it in your components
};

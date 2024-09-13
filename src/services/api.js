// src/services/api.js

import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/';

// Create an instance of Axios
const api = axios.create({
  baseURL: API_URL
});

// Add a request interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access-token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
    config.headers['client'] = localStorage.getItem('client');
    config.headers['uid'] = localStorage.getItem('uid');
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;

// src/services/productService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/products';

const getProducts = () => {
  return axios.get(API_URL);
};

const createProduct = (product) => {
  return axios.post(API_URL, product);
};

export { getProducts, createProduct };

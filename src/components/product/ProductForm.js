// src/components/ProductForm.js
import React, { useState } from 'react';
import { createProduct } from '../../services/productService';

function ProductForm({ onProductCreated }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = { name, description, price: parseFloat(price), stock: parseInt(stock) };

    createProduct(product).then((response) => {
      onProductCreated(response.data); // Callback to update the product list
      setName('');
      setDescription('');
      setPrice('');
      setStock('');
    }).catch(error => {
      console.error('There was an error creating the product!', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Stock:</label>
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Product</button>
    </form>
  );
}

export default ProductForm;

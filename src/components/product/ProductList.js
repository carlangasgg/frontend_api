// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import { getProducts } from '../../services/productService';
import ProductModal from './ProductModal';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    getProducts().then(response => {
      setProducts(response.data);
    });
  };

  const handleProductCreated = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Product List</h1>
      <button onClick={openModal}>Create New Product</button>
      <ProductModal 
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onProductCreated={handleProductCreated}
      />
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

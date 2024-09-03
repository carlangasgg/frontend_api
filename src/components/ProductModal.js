// src/components/ProductModal.js
import React from 'react';
import Modal from 'react-modal';
import ProductForm from './ProductForm';

Modal.setAppElement('#root'); // Important for accessibility

function ProductModal({ isOpen, onRequestClose, onProductCreated }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Create New Product"
      className={{ base: 'Modal', afterOpen: 'Modal Open', beforeClose: 'Modal' }}
      overlayClassName={{ base: 'Overlay', afterOpen: 'Overlay Open', beforeClose: 'Overlay' }}
    >
      <h2>Create New Product</h2>
      <ProductForm onProductCreated={onProductCreated} />
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
}

export default ProductModal;

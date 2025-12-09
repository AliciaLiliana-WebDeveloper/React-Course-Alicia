import React, { useState } from "react";
import "./AddProductModal.css";

const AddProductModal = ({ addProduct, closeModal }) => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Si el campo pertenece al rating
    if (name === "rate" || name === "count") {
      setNewProduct((prev) => ({
        ...prev,
        rating: {
          ...prev.rating,
          [name]: value,
        },
      }));
      return;
    }

    // Campos normales
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(newProduct);
    closeModal();
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleModalClick}>
      <div className="modal">
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={newProduct.title}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Price:
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Description:
            <textarea
              name="description"
              value={newProduct.description}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Category:
            <input
              type="text"
              name="category"
              value={newProduct.category}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Image URL:
            <input
              type="text"
              name="image"
              value={newProduct.image}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Rating (rate):
            <input
              type="number"
              name="rate"
              value={newProduct.rating.rate}
              onChange={handleInputChange}
              step="0.1"
            />
          </label>

          <label>
            Rating (count):
            <input
              type="number"
              name="count"
              value={newProduct.rating.count}
              onChange={handleInputChange}
            />
          </label>

          <button type="submit">Add Product</button>
          <button type="button" onClick={closeModal}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;

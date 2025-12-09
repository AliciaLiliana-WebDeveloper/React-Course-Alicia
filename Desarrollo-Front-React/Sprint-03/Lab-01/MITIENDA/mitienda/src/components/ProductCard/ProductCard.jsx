import React, { useState } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import AddToCartButton from "../AddToCartButton/AddToCartButton.jsx";
import ProductEditModal from "../ProductEditModal/ProductEditModal.jsx";
import { useProducts } from "../../hooks/useProducts.js";

const ProductCard = ({ product, userData }) => { // ✅ Recibe userData
  const { id, title, price, image } = product;
  const { isLoggedIn } = useAuth();
  const { deleteProduct } = useProducts();
  
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  const isAdmin = userData?.role === "admin"; // ✅ Verifica si es admin

  const handleDelete = async () => {
    if (window.confirm(`¿Estás seguro de eliminar "${title}"?`)) {
      await deleteProduct(id);
    }
  };

  return (
    <>
      {isEditModalOpen && (
        <ProductEditModal
          product={product}
          closeModal={() => setIsEditModalOpen(false)}
        />
      )}

      <div className="product-card" key={id}>
        <Link to={`/product/${id}`}>
          <div className="product-image-container">
            <img className="product-image" src={image} alt={title} />
          </div>
          <div className="product-info">
            <h3 className="product-title">{title}</h3>
            <p className="product-price">{`$${price}`}</p>
          </div>
        </Link>

        {isLoggedIn && <AddToCartButton item={product} />}

        {/* ✅ Botones de admin */}
        {isAdmin && (
          <div className="admin-buttons">
            <button 
              className="edit-btn" 
              onClick={() => setIsEditModalOpen(true)}
            >
              ✏️ Editar
            </button>
            <button 
              className="delete-btn" 
              onClick={handleDelete}
            >
              🗑️ Eliminar
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductCard;
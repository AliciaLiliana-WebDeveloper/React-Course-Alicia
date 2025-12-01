import React from "react";
import "./ProductCard.css";
import useCart from "../../hooks/useCart.js";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import AddToCartButton from "../AddToCartButton/AddToCartButton.jsx";

const ProductCard = ({ product }) => {
  const { id, title, price, description, image, rating } = product;
  const { isLoggedIn } = useAuth();

  return (
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
    </div>
  );
};

export default ProductCard;

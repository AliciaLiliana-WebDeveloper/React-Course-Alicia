import React from "react";
import products from "../../fakeapi/data.json";
import { Outlet, useParams } from "react-router";
import "./ProductDetails.css";
import BackButton from "../../components/BackButton/BackButton";
import AddToCartButton from "../../components/AddToCartButton/AddToCartButton";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <p>Loading product...</p>;
  }

  return (
    <div className="product-details-container">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
        <BackButton />
      </div>

      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">{`$${product.price}`}</p>
        <p className="product-description">{product.description}</p>
        <p className="product-category">{`Category: ${product.category}`}</p>

        <AddToCartButton item={product} />
      </div>
    </div>
  );
};

export default ProductDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useProducts } from "../../hooks/useProducts";
import AddToCartButton from "../../components/AddToCartButton/AddToCartButton";
import BackButton from "../../components/BackButton/BackButton";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import Loader from "../../components/Loader/Loader";
import "./ProductDetails.css";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { getProductById, loading, error } = useProducts();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const productData = await getProductById(id);
      setProduct(productData);
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!product && !error) {
    return <>No hay productos</>;
  }

  return (
    <>
      {error ? (
        <ErrorComponent error={error} />
      ) : (
        <div className="product-details-container">
          <div className="product-image">
            <img src={product.image} alt={product.title} />
            <BackButton />
          </div>
          <div className="product-info">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">${product.price}</p>
            <p className="product-description">{product.description}</p>
            <p className="product-category">{`Category: ${product.category}`}</p>
            <AddToCartButton item={product} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;

import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ProductsSection.css";
import data from "../../fakeapi/data.json";

function ProductsSection({ filtro = "" }) {
  // Filtrar productos por título
  const products = data.filter((product) =>
    product.title.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="products-section">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsSection;

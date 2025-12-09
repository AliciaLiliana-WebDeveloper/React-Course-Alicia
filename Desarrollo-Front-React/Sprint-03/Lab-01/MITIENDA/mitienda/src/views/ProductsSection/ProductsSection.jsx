import React, { useState } from "react";
import "./ProductsSection.css";
import { useFiltro } from "../../context/FilterContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useProducts } from "../../hooks/useProducts";
import useAuth from "../../hooks/useAuth";
import AddProductModal from "../../components/AddProductModal/AddProductModal";
import Loader from "../../components/Loader/Loader";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";

function ProductsSection() {
  const { filtro } = useFiltro();
  const { products, loading, error, addProduct } = useProducts();
  const { userData } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const isAdmin = userData?.role === "admin";

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filtro.toLowerCase())
  );

  const handleAddProduct = () => {
    openModal();
  };

  // LOADING
  if (loading) {
    return <Loader />;
  }

  // ERROR
  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <>
      {isModalOpen && (
        <AddProductModal
          closeModal={closeModal}
          addProduct={(newProduct) => {
            addProduct(newProduct);
            closeModal();
          }}
        />
      )}

      <div className="products-section">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={`${product.id}-${product.updatedAt}`}
              product={product}
              userData={userData}
            />
          ))
        ) : (
          !error && <p>No hay productos que coincidan con tu búsqueda</p>
        )}
      </div>

      {isAdmin && (
        <div className="add-product-btn-container">
          <button className="add-product-btn" onClick={handleAddProduct}>
            Add New Product
          </button>
        </div>
      )}
    </>
  );
}

export default ProductsSection;

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/products";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  // Obtener todos los productos
  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (e) {
      if (e.response && e.response.status === 404) {
        setError("No hay ningún producto");
      } else {
        setError("Error al recuperar los productos");
      }
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  // Obtener producto por ID
  const getProductById = async (id) => {
    setLoading(true);
    try {
      // throw new Error();
      const response = await axios.get(`${API_URL}/${id}`);
      const product = response.data;
      return product;
    } catch (e) {
      if (e.response && e.response.status === 404) {
        setError(`El producto con el ID ${id} no existe`);
      } else {
        setError(`Error al obtener el producto con ID ${id}`);
      }
    } finally {
      setLoading(false);
    }
  };
  

  // Actualizar producto
  const updateProduct = async (id, editedProduct) => {
    try {
      // throw new Error();
      setLoading(true);
  
      const response = await axios.put(`${API_URL}/${id}`, editedProduct);
  
      const updatedProduct = {
        ...response.data,
        updatedAt: new Date().toISOString(),
      };
  
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? updatedProduct : product
        )
      );
  
    } catch (e) {
      if (e.response && e.response.status === 404) {
        setError(`Producto con ID ${id} ya no existe`);
      } else {
        setError(`Error al guardar las modificaciones en el producto ${id}`,
        e
        );
      }
    } finally {
      setLoading(false);
    }
  };
  

  // Eliminar producto
  const deleteProduct = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${API_URL}/${id}`);

      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (e) {
      if (e.response && e.response.status === 404) {
        setError(`El producto con ID ${id} ya no existía`);
      } else {
        setError(`Error al eliminar el producto con ID ${id}`,
        e
        );
      }
    } finally {
      setLoading(false);
    }
  };

  // Agregar producto
  const addProduct = async (newProduct) => {
    try {
      // throw new Error();
      setLoading(true);
  
      const response = await axios.post(API_URL, newProduct);
      const addedProduct = response.data;
  
      setProducts((prevProducts) => [...prevProducts, addedProduct]);
  
    } catch (e) {
      setError("Error al crear el producto", e);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        error,
        getProducts,
        getProductById,
        updateProduct,
        deleteProduct,
        addProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

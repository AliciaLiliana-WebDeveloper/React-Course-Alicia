import { useContext } from "react";
import { ProductsContext } from "../context/ProductContext";

export const useProducts = () => {
    const context = useContext(ProductsContext);
    return context;
};
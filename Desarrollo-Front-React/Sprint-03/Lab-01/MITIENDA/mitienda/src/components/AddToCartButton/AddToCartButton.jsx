import React from "react";
import useCart from "../../hooks/useCart";

function AddToCartButton({ item }) {
    const { addToCart } = useCart();
    return (
        <button className="product-add-to-cart" onClick={() => addToCart(item)}>
            Añadir a la cesta
        </button>
    )
}
export default AddToCartButton;
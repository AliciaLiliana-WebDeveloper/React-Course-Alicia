import React from "react";
import "./CartSection.css";
import useCart from "../../hooks/useCart";

const CartSection = () => {
  const { cartItems, resetCart} = useCart();

  // Agrupar los items por id y contar cantidad
  const groupedCartItems = cartItems.reduce((acc, item) => {
    if (acc[item.id]) {
      acc[item.id].count++; // si ya existe, aumenta el count
    } else {
      acc[item.id] = { ...item, count: 1 }; // si no existe, crea con count=1
    }
    return acc;
  }, {});
  

  const uniqueCartItems = Object.values(groupedCartItems);

  const totalPrice = uniqueCartItems.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  const handleBuy = () => {
    cartItems.length
      ? alert("Serás redirigido a la pasarela de pago")
      : alert("Añade productos al carro");
    resetCart();
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      <div className="cart-items">
        {uniqueCartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-image">
              <img src={item.image} alt={item.title} />
              <p className="item-count">{item.count}</p>
            </div>
            <div className="cart-item-details">
              <p>{item.title}</p>
              <p>Precio por unidad: ${item.price.toFixed(2)}</p>
              <p>Precio total: ${(item.price * item.count).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price">
        <p>Total a Pagar: ${totalPrice.toFixed(2)}</p>
      </div>
      <button className="buy-button" onClick={handleBuy}>
        Comprar
      </button>
      <button className="reset-button" onClick={resetCart}>
        Reset Carro
      </button>

    </div>
  );
};

export default CartSection;

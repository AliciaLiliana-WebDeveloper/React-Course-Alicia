import React from "react";
import { useNavigate } from "react-router-dom";
import UserIcon from "../../icons/UserIcon.png";
import LikeIcon from "../../icons/LikeIcon.png";
import CartIcon from "../../icons/CartIcon.svg";
import ThemeIcon from "../../icons/ThemeIcon.svg";
import "./Iconslist.css";

import useCart from "../../hooks/useCart.js";
import useTheme from "../../hooks/useTheme.js";

function IconsList() {
  const whiteIconStyle = { filter: "invert(100%)" };
  const { cartItems } = useCart();
  const { toggleTheme } = useTheme();
  const navigate = useNavigate(); // <-- hook de navegación

  const cartItemCount = cartItems.length;

  return (
    <ul className="user-icons">
      <li className="user-icon" onClick={() => navigate("/login")}>
        <img src={UserIcon} alt="Usuario" style={whiteIconStyle} />
      </li>
      <li className="like-icon">
        <img src={LikeIcon} alt="Favoritos" style={whiteIconStyle} />
      </li>
      <li className="theme-icon" onClick={() => toggleTheme()}>
        <img src={ThemeIcon} alt="" style={whiteIconStyle} />
      </li>
      <li className="cart-icon" onClick={() => navigate("/cart")}>
        <img src={CartIcon} alt="Carrito" style={whiteIconStyle} />
        {cartItemCount > 0 && (
          <span className="cart-count">{cartItemCount}</span>
        )}
      </li>
    </ul>
  );
}

export default IconsList;

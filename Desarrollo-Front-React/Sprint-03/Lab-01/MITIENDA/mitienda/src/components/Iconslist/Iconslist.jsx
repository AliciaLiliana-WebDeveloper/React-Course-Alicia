import React from "react";
import UserIcon from "../../icons/UserIcon.png";
import LikeIcon from "../../icons/LikeIcon.png";
import CartIcon from "../../icons/CartIcon.svg";

function IconsList() {
  const whiteIconStyle = { filter: "invert(100%)" }; // Estilo para hacer los iconos blancos

  return (
    <ul className="user-icons">
      <li className="user-icon">
        <img src={UserIcon} alt="Usuario" style={whiteIconStyle} />
      </li>
      <li className="like-icon">
        <img src={LikeIcon} alt="Favoritos" style={whiteIconStyle} />
      </li>
      <li className="cart-icon">
        <img src={CartIcon} alt="Carrito" style={whiteIconStyle} />
      </li>
    </ul>
  );
}

export default IconsList;

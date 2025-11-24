import React, { useState } from "react";
import "./HeaderNavBar.css"

function HeaderNavBar({ onFilterChange, onClickLogo }) {
  const menuOptions = ["Inicio", "Categorías", "Ofertas", "Contacto"];
  const [textoFiltro, setTextoFiltro] = useState("");

  const handleInputChange = (event) => {
    const nuevoTexto = event.target.value;
    setTextoFiltro(nuevoTexto);
    onFilterChange(nuevoTexto);
  };

  return (
    <nav className="header-navbar">
      <div className="logo" onClick={onClickLogo}>MiTienda</div>

      <ul className="menu-options">
        {menuOptions.map((opt) => (
          <li 
            key={opt} 
            onClick={opt === "Inicio" ? onClickLogo : undefined}
          >
            {opt}
          </li>
        ))}
      </ul>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar productos"
          value={textoFiltro}
          onChange={handleInputChange}
        />
      </div>
    </nav>
  );
}


export default HeaderNavBar;

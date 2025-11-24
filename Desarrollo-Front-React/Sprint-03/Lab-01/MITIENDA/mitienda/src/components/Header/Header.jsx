import React from "react";
import HeaderNavBar from "../HeaderNavBar/HeaderNavBar";
import IconsList from "../Iconslist/Iconslist";
import "./Header.css";

function Header({ onFilterChange, showCart, showProducts, onUserClick}) {
  const handleFilterChange = (nuevoFiltro) => {
    onFilterChange(nuevoFiltro);
  };
  return (
    <header>
      <div className="header-container">
        <HeaderNavBar 
          onFilterChange={handleFilterChange} 
          onClickLogo={showProducts}
        />
        {/* Pasamos la función onUserClick al componente IconsList */}
        <IconsList 
          onClickCartIcon={showCart}
          onUserClick={onUserClick} 
        />
      </div>
    </header>
  );
}

export default Header;
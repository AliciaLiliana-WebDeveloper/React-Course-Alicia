import React from "react";
import HeaderNavBar from "../HeaderNavBar/HeaderNavBar";
import IconsList from "../Iconslist/Iconslist";
import "./Header.css";

function Header({ onFilterChange }) {
  return (
    <header>
      <div className="header-container">
        <HeaderNavBar onFilterChange={onFilterChange} />
        <IconsList />
      </div>
    </header>
  );
}

export default Header;
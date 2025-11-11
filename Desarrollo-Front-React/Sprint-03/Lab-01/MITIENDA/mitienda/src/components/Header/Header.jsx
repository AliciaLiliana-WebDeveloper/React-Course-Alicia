import React from "react";
import HeaderNavBar from "../HeaderNavBar/HeaderNavBar";
import IconsList from "../Iconslist/Iconslist";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header-container">
        <HeaderNavBar />
        <IconsList />
      </div>
    </header>
  );
}

export default Header;
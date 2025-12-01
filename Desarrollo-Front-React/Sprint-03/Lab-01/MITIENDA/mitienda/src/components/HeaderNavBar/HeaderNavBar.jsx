import React from "react";
import { Link } from "react-router-dom";
import { useFiltro } from "../../context/FilterContext";
import "./HeaderNavBar.css";

function HeaderNavBar() {
  const { filtro, changeFiltro } = useFiltro();

  const handleInputChange = (event) => {
    const nuevoTexto = event.target.value;
    changeFiltro(nuevoTexto);
  };

  const menuOptions = ["Categorias" , "Ofertas" , "Contacto"];

  return (
    <>
      <Link to="/">
        <div className="logo">MiTienda</div>
      </Link>
  
      <ul>
        {menuOptions.map((opt) => (
          <li key={opt}>{opt}</li>
        ))}
      </ul>
  
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar productos"
          value={filtro}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
  }
  
  export default HeaderNavBar;  

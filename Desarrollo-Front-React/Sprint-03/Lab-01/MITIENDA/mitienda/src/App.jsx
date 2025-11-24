import React, { useState } from "react";
import Header from "./components/Header/Header";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import LoginForm from "./components/LoginForm/LoginForm";
import CartSection from "./components/CartSection/CartSection";
import useTheme from "./hooks/useTheme";

function App() {
  const [filtro, setFiltro] = useState("");
  const { darkMode } = useTheme();
  const [showCartSection, setShowCartSection] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // Estado para el login

  const handleShowCart = () => {
    setShowCartSection(true);
    setShowLogin(false); // Opcional: cerrar login si abre carrito
  };

  const handleShowProducts = () => {
    setShowCartSection(false);
  };

  const handleToggleLogin = () => {
    setShowLogin(prev => !prev); // Alterna el login
  };

  return (
    <div className={darkMode ? "darkMode" : ""}>
      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />} 

      <Header 
        onFilterChange={setFiltro} 
        showCart={handleShowCart}
        showProducts={handleShowProducts}
        onUserClick={handleToggleLogin}
      />

      <Banner />

      {showCartSection ? <CartSection /> : <ProductsSection filtro={filtro} />}

      <Footer />
    </div>
  );
}

export default App;

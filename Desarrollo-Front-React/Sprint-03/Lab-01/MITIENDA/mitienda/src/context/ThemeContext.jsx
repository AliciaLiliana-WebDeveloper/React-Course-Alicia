// ThemeContext.js
import React, { createContext, useState } from "react";

// Crear contexto
export const ThemeContext = createContext();

// Componente proveedor
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Función para alternar el tema
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

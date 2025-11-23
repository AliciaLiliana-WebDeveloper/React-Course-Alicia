import React, { createContext, useState } from "react";

// Creamos el contexto
export const ThemeContext = createContext();

// Componente proveedor
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeContextValues = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValues}>
      {children}
    </ThemeContext.Provider>
  );
};

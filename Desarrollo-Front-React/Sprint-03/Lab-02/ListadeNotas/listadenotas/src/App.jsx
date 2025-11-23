import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ListaDeNotas from "./ListaDeNotas";
import MousePositionComponent from "./MousePositionComponent";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <ListaDeNotas />
    </ThemeProvider>
  );
}

export default App;

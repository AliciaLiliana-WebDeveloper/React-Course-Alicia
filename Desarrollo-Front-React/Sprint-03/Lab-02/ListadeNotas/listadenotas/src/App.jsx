import React from "react";
import "./App.css";
import ListaDeNotas from "./ListaDeNotas";
import MousePositionComponent from "./MousePositionComponent";
import Counter from "./Counter";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {/*<ListaDeNotas />*/}
        <Counter />
        {/*<MousePositionComponent />*/}
      </div>
    </ThemeProvider>
  );
}

export default App;

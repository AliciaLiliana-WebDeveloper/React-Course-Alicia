import React, { useState, useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const ListaDeNotas = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // 👈 esto faltaba
  const [notas, setNotas] = useState([]);
  const [valorInput, setValorInput] = useState("");

  const agregarNota = () => {
    if (valorInput.trim() !== "") {
      setNotas((prevNotas) => [
        ...prevNotas,
        { id: Date.now(), texto: valorInput, completada: false },
      ]);
      setValorInput("");
    }
  };

  const eliminarNota = (id) => {
    setNotas(notas.filter((nota) => nota.id !== id));
  };

  const completarNota = (id) => {
    setNotas(
      notas.map((nota) =>
        nota.id === id ? { ...nota, completada: !nota.completada } : nota
      )
    );
  };

  const handleCheckboxChange = (id) => {
    completarNota(id);
  };

  // Estilos según el tema
  const estilos = {
    backgroundColor: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#333",
  };

  return (
    <div style={estilos}>
      <h2>Lista de Notas</h2>

      <button onClick={toggleTheme} style={{ marginBottom: "10px" }}>
        Cambiar a {theme === "light" ? "Night Mode" : "Day Mode"}
      </button>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={valorInput}
          onChange={(e) => setValorInput(e.target.value)}
          placeholder="Escribe una nota..."
        />
        <button onClick={agregarNota} style={{ marginLeft: "8px" }}>
          Agregar Nota
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {notas.map((nota) => (
          <li
            key={nota.id}
            style={{
              marginBottom: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              type="checkbox"
              checked={nota.completada}
              onChange={() => handleCheckboxChange(nota.id)}
            />
            <span
              style={{
                textDecoration: nota.completada ? "line-through" : "none",
                marginLeft: "8px",
                flex: 1,
              }}
            >
              {nota.texto}
            </span>
            <button onClick={() => eliminarNota(nota.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeNotas;

import React, { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    console.log("me llama");
    setContador(contador + 1);
  };

  const decrementarContador = () => {
    setContador(contador - 1);
  };

  const resetearContador = () => {
    setContador(0);
    console.log(contador);
  };

  const aumentaEnTresContador = () => {
    setContador((prevContador) => prevContador + 1);
    setContador((prevContador) => prevContador + 1);
    setContador((prevContador) => prevContador + 1);
    console.log(contador);
  };

  const duplicarContador = () => {
    setContador(contador * 2);
    console.log(contador);
  };

  return (
    <div className="container">
      <h2>Contador: {contador}</h2>
      <button onClick={incrementarContador}>Incrementar</button>
      <button onClick={decrementarContador}>Decrementar</button>
      <button onClick={resetearContador}>Resetear</button>
      <button onClick={aumentaEnTresContador}>Aumenta tres</button>
      <button onClick={duplicarContador}>Duplicar</button>
    </div>
  );
}

export default Contador;

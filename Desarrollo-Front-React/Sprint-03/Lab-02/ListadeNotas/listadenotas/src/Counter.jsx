import React from "react";
import { useCounter } from "./hooks/useCounter";

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Resetear</button>
    </div>
  );
};

export default Counter;

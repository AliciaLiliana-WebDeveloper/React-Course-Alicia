import { useReducer } from "react";

// Reducer
const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};

// Hook personalizado
export const useCounter = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });
  const reset = () => dispatch({ type: "reset" });

  return { count, increment, decrement, reset };
};

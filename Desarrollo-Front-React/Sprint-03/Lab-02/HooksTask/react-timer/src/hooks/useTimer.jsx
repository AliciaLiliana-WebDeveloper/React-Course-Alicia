import { useEffect, useRef, useState } from "react";

export function useTimer(initialValue = 0) {
  const [time, setTime] = useState(initialValue);
  const intervalRef = useRef(null);

  // Iniciar
  const start = () => {
    if (intervalRef.current) return; // evita intervalos duplicados

    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  // Pausar
  const pause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  // Resetear
  const reset = () => {
    pause();
    setTime(initialValue);
  };

  // Limpiar al desmontar
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return { time, start, pause, reset };
}

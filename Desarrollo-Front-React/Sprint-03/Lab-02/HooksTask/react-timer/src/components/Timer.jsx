import { useTimer } from "../hooks/useTimer";

export default function Timer() {
  const { time, start, pause, reset } = useTimer(0);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Temporizador</h2>

      <h1>{time}s</h1>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={start}>Iniciar</button>
        <button onClick={pause}>Pausar</button>
        <button onClick={reset}>Reiniciar</button>
      </div>
    </div>
  );
}
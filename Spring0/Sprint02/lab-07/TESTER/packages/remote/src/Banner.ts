import "./index.css";

export const banner = (): void => {
  const app = document.getElementById("app");
  if (!app) return; // prevención por si no existe el elemento

  const banner = document.createElement("div");
  banner.classList.add("banner");
  banner.innerHTML = `
    <header>
      <h1>Remote</h1>
    </header>
    <p>Hola, este es un banner remoto</p>
  `;
  app.appendChild(banner);
};

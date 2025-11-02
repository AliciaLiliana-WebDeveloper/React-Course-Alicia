import "./index.css";
import { banner } from "./Banner";

document.getElementById("app")!.innerHTML = `
  <div class="container">
    <div>Name: remote</div>
    <div>Framework: vanilla</div>
  </div>
`;

banner(); // <-- ejecuta el banner después de crear el contenido

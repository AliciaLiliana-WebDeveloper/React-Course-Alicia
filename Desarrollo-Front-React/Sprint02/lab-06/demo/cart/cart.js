// Simula otro microfrontend independiente
export function mountCart(containerId) {
    const el = document.getElementById(containerId);
  
    // Asignamos correctamente el HTML
    el.innerHTML = `
      <h2>Carrito</h2>
      <ul id="cart-list"></ul>
    `;
  
    const list = document.getElementById("cart-list");
  
    // Escucha eventos globales emitidos por otros microfrontends
    window.addEventListener("ADD_TO_CART", (e) => {
      const li = document.createElement("li");
      li.textContent = e.detail.name;
      list.appendChild(li);
    });
  }
  
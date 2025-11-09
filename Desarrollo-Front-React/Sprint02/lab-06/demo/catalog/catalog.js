// simula un microfrontend independiente
export function mountCatalog(containerId) {
    const el = document.getElementById(containerId);
  
    el.innerHTML = `
      <h2>Catálogo</h2>
      <button id="add1">Añadir Producto 1</button>
      <button id="add2">Añadir Producto 2</button>
    `;
  
    // Asignamos los eventos correctamente usando funciones flecha
    document.getElementById("add1").onclick = () => addToCart("Producto 1");
    document.getElementById("add2").onclick = () => addToCart("Producto 2");
  
    function addToCart(productName) {
      // Se dispara un evento global que otros microfrontends pueden escuchar
      window.dispatchEvent(
        new CustomEvent("ADD_TO_CART", { detail: { name: productName } })
      );
    }
  }
  
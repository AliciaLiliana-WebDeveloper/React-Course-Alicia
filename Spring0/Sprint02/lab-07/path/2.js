// Buen refactor: ahorramos repetición de código y aplicamos timeout
async function simpleFetch(url, options = {}) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);
  
    try {
      const response = await fetch(url, {
        headers: { "Content-Type": "application/json" },
        signal: controller.signal, // importante: conectar el abort controller
        ...options,
      });
  
      clearTimeout(timeout);
  
      if (!response.ok) {
        // Manejo de error con mensaje correcto
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      if (error.name === "AbortError") {
        throw new Error("La petición excedió el tiempo límite (3s)");
      }
      throw error;
    }
  }
  
  // Función específica que usa el fetch genérico
  export async function fetchUsers() {
    return simpleFetch(`https://api.example.com/users`);
  }
  export async function fetchUsersById(id) {
    return simpleFetch(`https://api.example.com/users/${id}`);
  }
  export async function createUser(body) {
    return simpleFetch(`https://api.example.com/users/{id}`);
  }
  
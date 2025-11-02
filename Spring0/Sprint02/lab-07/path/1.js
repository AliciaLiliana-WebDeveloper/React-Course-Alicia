// Funciones sin infraestructura de cliente API
export async function fetchUsers() {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const response = await fetch("https://api.example.com/users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      if (response.status >= 500) {
        console.warn("Servidor falló, intenta de nuevo más tarde");
      }
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    // Si todo va bien, devolvemos el JSON
    return await response.json();

  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("La petición tardó demasiado");
    }
    throw error;
  }
}

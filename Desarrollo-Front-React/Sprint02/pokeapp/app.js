const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
let offset = 0;
const limit = 10;

// ----- FUNCIONES DEL FETCH -----
// ----- BUSCO Y OBTENGO MIS POKEMONES-----
async function fetchPokemonList(offset = 0, limit = 10) {
  try {
    const response = await fetch(`${apiUrl}?limit=${limit}&offset=${offset}`);
    if (!response.ok) throw new Error('Error al intentar obtener la lista de Pokenon.');
    const data = await response.json();
    return data.results;
  } catch (error) {
    alert(error.message);
    return [];
  }
}

// ----- OBTENGO DETALLE DE MIS POKEMONES-----
async function fetchPokemonDetail(nameOrId) {
  try {
    const response = await fetch(`${apiUrl}/${nameOrId.toLowerCase()}`);
    if (!response.ok) throw new Error('Pokemon no encontrado.');
    const data = await response.json();
    return data;
  } catch (error) {
    alert(error.message);
    return null;
  }
}

// ----- FUNCIONES PARA ACTUALIZAR EL DOM-----
// ----- FUNCION PARA MOSTRAR LISTA DE MIS POKEMONES -----
async function displayPokemonList(pokemonArray) {
  const listContainer = document.getElementById('pokemon-list');
  listContainer.innerHTML = '';
  for (const pokemon of pokemonArray) {
    const details = await fetchPokemonDetail(pokemon.name);
    if (details) {
      const card = document.createElement('div');
      card.className = 'pokemon-card';
      card.innerHTML = `
        <img src="${details.sprites.front_default}" alt="${details.name}">
        <h3>${details.name}</h3>
        <p>Tipos: ${details.types.map(t => t.type.name).join(', ')}</p>
      `;
      listContainer.appendChild(card);
    }
  }
}

// ----- FUNCIÓN PARA MOSTRAR DETALLE DE MI POKEMON SELECCIONADO -----
function displayPokemonDetail(pokemon) {
  const detailContainer = document.getElementById('pokemon-detail');
  if (!pokemon){
    detailContainer.innerHTML = '';
    return;
  }
  detailContainer.innerHTML = `
    <h2>${pokemon.name}</h2>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <p>Tipos: ${pokemon.types.map(t => t.type.name).join(', ')}</p>
    <p>Habilidades: ${pokemon.abilities.slice(0, 3).map(a => a.ability.name).join(', ')}</p>
  `;
}

// ----- OBTENGO DETALLE DE MIS POKEMONES-----
async function loadPokemonList() {
  const pokemonArray = await fetchPokemonList(offset, limit);
  displayPokemonList(pokemonArray);
}

// ----- FUNCIÓN PARA PASAR DE PÁGINA -----
function init() {
  // ----- LISTA INICIAL -----
  loadPokemonList();

  // ----- EVENTOS PARA BUSCAR -----
  const form = document.getElementById('search-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.getElementById('search-input').value.trim();
    if (!input) return;
    const pokemon = await fetchPokemonDetail(input);
    displayPokemonDetail(pokemon);
  });

  // ----- EVENTOS DE PAGINACION  -----
  document.getElementById('prev-btn').addEventListener('click', () => {
    if (offset >= limit) {
      offset -= limit;
      loadPokemonList();
    }
  });

  document.getElementById('next-btn').addEventListener('click', () => {
    offset += limit;
    loadPokemonList();
  });
}

// ----- EJECUTO AL CARGAR LA PÁGINAL -----
window.addEventListener('DOMContentLoaded', init);


const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist"
];

// Seleccionamos la lista del HTML
const listaAlbums = document.querySelector("#lista-albums");

// Recorremos todos los álbumes
for (const album of albums) {

  // Creamos un elemento li
  const elemento = document.createElement("li");

  // Introducimos el nombre del álbum
  elemento.textContent = album;

  // Añadimos el li dentro del ul
  listaAlbums.appendChild(elemento);
}

console.log("Lista de álbumes creada correctamente");

// EJERCICIO 3.1
// Crear una lista de países

const countries = [
  "Japón",
  "Nicaragua",
  "Suiza",
  "Australia",
  "Venezuela"
];

const listaPaises = document.createElement("ul");

for (const country of countries) {
  const elemento = document.createElement("li");
  elemento.textContent = country;
  listaPaises.appendChild(elemento);
}

document.body.appendChild(listaPaises);


// EJERCICIO 3.2
// Eliminar el elemento con la clase fn-remove-me

const elementoEliminar = document.querySelector(".fn-remove-me");
elementoEliminar.remove();


// EJERCICIO 3.3
// Crear una lista de coches dentro del div indicado

const cars = [
  "Mazda 6",
  "Ford fiesta",
  "Audi A4",
  "Toyota corola"
];

const contenedorCoches = document.querySelector('[data-function="printHere"]');

const listaCoches = document.createElement("ul");

for (const car of cars) {
  const elemento = document.createElement("li");
  elemento.textContent = car;
  listaCoches.appendChild(elemento);
}

contenedorCoches.appendChild(listaCoches);


// EJERCICIO 3.4
// Crear divs con un h4 y una imagen

const imagenes = [
  {
      title: "Random title",
      imgUrl: "https://picsum.photos/300/200?random=1"
  },
  {
      title: "Random title",
      imgUrl: "https://picsum.photos/300/200?random=2"
  },
  {
      title: "Random title",
      imgUrl: "https://picsum.photos/300/200?random=3"
  },
  {
      title: "Random title",
      imgUrl: "https://picsum.photos/300/200?random=4"
  },
  {
      title: "Random title",
      imgUrl: "https://picsum.photos/300/200?random=5"
  }
];

const contenedorImagenes = document.createElement("div");
contenedorImagenes.id = "contenedor-imagenes";

document.body.appendChild(contenedorImagenes);

for (const imagen of imagenes) {

  const nuevoDiv = document.createElement("div");

  const titulo = document.createElement("h4");
  titulo.textContent = imagen.title;

  const img = document.createElement("img");
  img.src = imagen.imgUrl;
  img.alt = imagen.title;

  nuevoDiv.appendChild(titulo);
  nuevoDiv.appendChild(img);

  contenedorImagenes.appendChild(nuevoDiv);
}


// EJERCICIO 3.5
// Crear un botón para eliminar el último div

const botonEliminarUltimo = document.createElement("button");

botonEliminarUltimo.textContent = "Eliminar último elemento";

document.body.appendChild(botonEliminarUltimo);

botonEliminarUltimo.addEventListener("click", function() {

  const ultimoDiv = contenedorImagenes.lastElementChild;

  if (ultimoDiv !== null) {
      ultimoDiv.remove();
  }

});


// EJERCICIO 3.6
// Crear un botón para eliminar cada div individualmente

const todosLosDivs = contenedorImagenes.children;

for (const div of todosLosDivs) {

  const botonEliminar = document.createElement("button");

  botonEliminar.textContent = "Eliminar este elemento";

  botonEliminar.addEventListener("click", function() {
      div.remove();
  });

  div.appendChild(botonEliminar);

}
// EJERCICIO 2.1
// Crear un div vacío e insertarlo en el HTML

const divVacio = document.createElement("div");
document.body.appendChild(divVacio);


// EJERCICIO 2.2
// Crear un div que contenga una p

const nuevoDiv = document.createElement("div");
const nuevoParrafo = document.createElement("p");

nuevoDiv.appendChild(nuevoParrafo);
document.body.appendChild(nuevoDiv);


// EJERCICIO 2.3
// Crear un div que contenga 6 párrafos utilizando un loop

const divSeisParrafos = document.createElement("div");

for (let i = 0; i < 6; i++) {
    const parrafo = document.createElement("p");
    divSeisParrafos.appendChild(parrafo);
}

document.body.appendChild(divSeisParrafos);


// EJERCICIO 2.4
// Crear un párrafo con el texto "Soy dinámico!"

const parrafoDinamico = document.createElement("p");
parrafoDinamico.textContent = "Soy dinámico!";

document.body.appendChild(parrafoDinamico);


// EJERCICIO 2.5
// Introducir texto en el h2 con la clase fn-insert-here

const titulo = document.querySelector("h2.fn-insert-here");
titulo.textContent = "Wubba Lubba dub dub";


// EJERCICIO 2.6
// Crear una lista ul con los elementos del array

const apps = [
    "Facebook",
    "Netflix",
    "Instagram",
    "Snapchat",
    "Twitter"
];

const lista = document.createElement("ul");

for (const app of apps) {
    const elementoLista = document.createElement("li");
    elementoLista.textContent = app;
    lista.appendChild(elementoLista);
}

document.body.appendChild(lista);


// EJERCICIO 2.7
// Eliminar todos los elementos con la clase fn-remove-me

const elementosEliminar = document.querySelectorAll(".fn-remove-me");

elementosEliminar.forEach(function(elemento) {
    elemento.remove();
});


// EJERCICIO 2.8
// Insertar un párrafo entre los dos primeros div originales

const divsOriginales = document.querySelectorAll("body > div");

const parrafoMedio = document.createElement("p");
parrafoMedio.textContent = "Voy en medio!";

divsOriginales[1].before(parrafoMedio);


// EJERCICIO 2.9
// Insertar un párrafo dentro de todos los div con la clase fn-insert-here

const divsConClase = document.querySelectorAll("div.fn-insert-here");

divsConClase.forEach(function(div) {
    const parrafoDentro = document.createElement("p");
    parrafoDentro.textContent = "Voy dentro!";

    div.appendChild(parrafoDentro);
});
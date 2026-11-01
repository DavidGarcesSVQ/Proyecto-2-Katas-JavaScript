// 1.1 Seleccionar el botón con la clase showme
const boton = document.querySelector(".showme");
console.log("1.1 Botón:", boton);


// 1.2 Seleccionar el h1 con el id pillado
const titulo = document.querySelector("#pillado");
console.log("1.2 H1:", titulo);


// 1.3 Seleccionar todos los párrafos
const parrafos = document.querySelectorAll("p");
console.log("1.3 Párrafos:", parrafos);


// 1.4 Seleccionar todos los elementos con la clase pokemon
const pokemons = document.querySelectorAll(".pokemon");
console.log("1.4 Pokémon:", pokemons);


// 1.5 Seleccionar todos los elementos con el atributo data-function="testMe"
const personajes = document.querySelectorAll('[data-function="testMe"]');
console.log("1.5 Personajes:", personajes);


// 1.6 Seleccionar el tercer personaje
const tercerPersonaje = document.querySelectorAll('[data-function="testMe"]')[2];
console.log("1.6 Tercer personaje:", tercerPersonaje);
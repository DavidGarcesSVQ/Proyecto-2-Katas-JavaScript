// EJERCICIO 1.1
// Evento click en el botón

const boton = document.querySelector("#btnToClick");

boton.addEventListener("click", function(event) {
  console.log("Evento click:", event);
});


// EJERCICIO 1.2
// Evento focus en el input

const inputFocus = document.querySelector(".focus");

inputFocus.addEventListener("focus", function(event) {
    console.log("Valor del input al seleccionarlo:", event.target.value);
});


// EJERCICIO 1.3
// Evento input en el input

const inputValue = document.querySelector(".value");

inputValue.addEventListener("input", function(event) {
    console.log("Valor actual del input:", event.target.value);
});
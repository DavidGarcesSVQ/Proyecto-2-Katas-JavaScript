import './style.css';

console.log("===== EJERCICIO 5: BUSCADOR DE STREAMERS =====");

// Datos necesarios para que este ejercicio funcione de forma independiente.
const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

// 1. SELECCIONAR EL INPUT
const inputBuscador = document.querySelector(
    '[data-function="toFilterStreamers"]'
);

// 2. DETECTAR CUANDO EL USUARIO ESCRIBE
inputBuscador.addEventListener('input', function(event) {

    // Obtener el texto que ha escrito el usuario
    const textoBuscado = event.target.value;

    // 3. FILTRAR LOS STREAMERS
    const streamersFiltrados = streamers.filter(streamer =>
        streamer.name.includes(textoBuscado)
    );

    // 4. MOSTRAR LOS RESULTADOS EN CONSOLA
    console.clear();
    console.log("Texto buscado:", textoBuscado);
    console.log("Streamers encontrados:", streamersFiltrados);

});

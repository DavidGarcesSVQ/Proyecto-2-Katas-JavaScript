import './style.css';

console.log("===== EJERCICIO 4: FILTER =====");

// ARRAY DE EDADES (se reutiliza en 4.1 y 4.2)
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

// 4.1 FILTRAR EDADES MAYORES DE 18
const mayoresDe18 = ages.filter(age => age > 18);

console.log("4.1 Mayores de 18:", mayoresDe18);


// 4.2 FILTRAR EDADES PARES
const edadesPares = ages.filter(age => age % 2 === 0);

console.log("4.2 Edades pares:", edadesPares);


// ARRAY DE STREAMERS (se reutiliza en 4.3, 4.4 y 4.5)
const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];


// 4.3 FILTRAR STREAMERS QUE JUEGAN A LEAGUE OF LEGENDS
const streamersLOL = streamers.filter(
    streamer => streamer.gameMorePlayed === 'League of Legends'
);

console.log("4.3 Streamers de League of Legends:", streamersLOL);


// 4.4 FILTRAR STREAMERS CUYO NOMBRE CONTIENE LA LETRA 'u'
const streamersConU = streamers.filter(
    streamer => streamer.name.includes('u')
);

console.log("4.4 Streamers con la letra u:", streamersConU);


// 4.5 FILTRAR JUEGOS QUE CONTIENEN 'Legends'
// Y PONER EL JUEGO EN MAYÚSCULAS SI LA EDAD ES MAYOR DE 35
const streamersLegends = streamers
    .filter(streamer => streamer.gameMorePlayed.includes('Legends'))
    .map(streamer => ({
        ...streamer,
        gameMorePlayed: streamer.age > 35
            ? streamer.gameMorePlayed.toUpperCase()
            : streamer.gameMorePlayed
    }));

console.log("4.5 Streamers de Legends:", streamersLegends);

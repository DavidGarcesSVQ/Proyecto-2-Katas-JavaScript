import './style.css';

console.log("===== EJERCICIO 7: FILTER + REDUCE =====");

// ARRAY DE VIDEOJUEGOS
const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10}
];


// 7.1 FILTRAR LOS VIDEOJUEGOS DEL GÉNERO RPG
const videojuegosRPG = videogames.filter(videogame =>
    videogame.genders.includes('RPG')
);

console.log("7.1 Videojuegos RPG:", videojuegosRPG);


// SUMAR LAS PUNTUACIONES DE LOS RPG
const sumaRPG = videojuegosRPG.reduce((acumulador, videogame) => {
    return acumulador + videogame.score;
}, 0);

console.log("Suma de puntuaciones RPG:", sumaRPG);


// CALCULAR LA MEDIA DE LOS RPG
const mediaRPG = sumaRPG / videojuegosRPG.length;

console.log("Media de puntuación RPG:", mediaRPG);

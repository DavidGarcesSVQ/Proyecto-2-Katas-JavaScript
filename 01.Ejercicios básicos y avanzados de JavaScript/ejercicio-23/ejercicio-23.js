// EJERCICIO 23
const movies23 = [
  { name: 'Titan A.E.', durationInMinutes: 130 }, { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 }, { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 }, { name: 'Terminator', durationInMinutes: 140 },
  { name: 'Spirited Away', durationInMinutes: 80 }, { name: 'The Matrix', durationInMinutes: 136 },
  { name: 'Amélie', durationInMinutes: 110 }, { name: 'Eternal Sunshine of the Spotless Mind', durationInMinutes: 108 }
];
const smallMovies23 = [];
const mediumMovies23 = [];
const largeMovies23 = [];
for (let movie of movies23) {
  if (movie.durationInMinutes < 100) smallMovies23.push(movie);
  else if (movie.durationInMinutes > 100 && movie.durationInMinutes < 200) mediumMovies23.push(movie);
  else if (movie.durationInMinutes > 200) largeMovies23.push(movie);
}
console.log('Películas pequeñas:', smallMovies23);
console.log('Películas medianas:', mediumMovies23);
console.log('Películas grandes:', largeMovies23);

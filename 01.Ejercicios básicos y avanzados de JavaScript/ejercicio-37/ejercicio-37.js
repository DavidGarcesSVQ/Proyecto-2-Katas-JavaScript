// EJERCICIO 37
const movies37 = [
  { title: 'Bracula: Condemor II', duration: 192, categories: ['comedia', 'aventura'] },
  { title: 'Spider-Man: No Way Home', duration: 122, categories: ['aventura', 'acción'] },
  { title: 'The Voices', duration: 223, categories: ['comedia', 'thriller'] },
  { title: 'Shrek', duration: 111, categories: ['comedia', 'aventura', 'animación'] }
];
const categorias37 = [];
for (let movie of movies37) {
  for (let category of movie.categories) if (!categorias37.includes(category)) categorias37.push(category);
}
console.log(categorias37);

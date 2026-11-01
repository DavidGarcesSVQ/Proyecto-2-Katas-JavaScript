// EJERCICIO 25
const movies25 = [
  { title: 'The Matrix', releaseYear: 1999 }, { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 }, { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 }, { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 }, { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 }, { title: 'Forrest Gump', releaseYear: 1994 }
];
let before2000_25 = 0;
let after2000_25 = 0;
for (let movie of movies25) {
  if (movie.releaseYear < 2000) before2000_25++;
  else if (movie.releaseYear > 2000) after2000_25++;
}
console.log('Películas anteriores a 2000:', before2000_25);
console.log('Películas posteriores a 2000:', after2000_25);

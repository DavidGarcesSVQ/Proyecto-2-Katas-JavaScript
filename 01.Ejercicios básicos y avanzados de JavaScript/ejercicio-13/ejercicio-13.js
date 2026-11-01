// EJERCICIO 13
const names = ['Peter', 'Steve', 'Tony', 'Natasha', 'Bruce', 'Clint', 'Logan', 'Xavier', 'Wanda', 'Nick'];
function nameFinder(nameList, nameToFind) {
  const posicion = nameList.indexOf(nameToFind);
  if (posicion !== -1) return `El nombre ${nameToFind} existe y está en la posición ${posicion}`;
  else return false;
}
console.log(nameFinder(names, 'Natasha'));
console.log(nameFinder(names, 'Thor'));

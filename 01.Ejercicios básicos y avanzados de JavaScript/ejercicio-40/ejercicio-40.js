// EJERCICIO 40
function findArrayIndex(array, text) {
  return array.indexOf(text);
}
function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) array.splice(index, 1);
  return array;
}
const mainCharacters40 = ['Luke', 'Leia', 'Han Solo', 'Chewbacca', 'Rey', 'Anakin', 'Obi-Wan'];
console.log('Índice de Leia:', findArrayIndex(mainCharacters40, 'Leia'));
console.log('Índice de Rey:', findArrayIndex(mainCharacters40, 'Rey'));
console.log('Índice de Yoda:', findArrayIndex(mainCharacters40, 'Yoda'));
console.log('Después de eliminar Han Solo:', removeItem(mainCharacters40, 'Han Solo'));
console.log('Después de eliminar Luke:', removeItem(mainCharacters40, 'Luke'));

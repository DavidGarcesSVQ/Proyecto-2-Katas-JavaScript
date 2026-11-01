// EJERCICIO 42
const fantasticFour42 = ['La antorcha humana', 'Mr. Fantástico', 'La mujer invisible', 'La cosa'];
function swap(array, indexOne, indexTwo) {
  const temporal = array[indexOne];
  array[indexOne] = array[indexTwo];
  array[indexTwo] = temporal;
  return array;
}
console.log(swap(fantasticFour42, 0, 3));

// EJERCICIO 8
const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(stringList) {
  let palabraMasLarga = stringList[0];
  for (let palabra of stringList) {
    if (palabra.length > palabraMasLarga.length) palabraMasLarga = palabra;
  }
  return palabraMasLarga;
}
console.log(findLongestWord(avengers));

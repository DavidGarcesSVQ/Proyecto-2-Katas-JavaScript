// EJERCICIO 9
const numbers = [1, 2, 3, 5, 45, 37, 58];
function sumNumbers(numberList) {
  let suma = 0;
  for (let numero of numberList) suma = suma + numero;
  return suma;
}
console.log(sumNumbers(numbers));

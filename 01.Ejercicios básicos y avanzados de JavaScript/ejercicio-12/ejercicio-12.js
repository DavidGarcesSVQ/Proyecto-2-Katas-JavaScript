// EJERCICIO 12
const duplicates = ['sushi', 'pizza', 'burger', 'sushi', 'pizza', 'tacos'];
function removeDuplicates(list) {
  const resultado = [];
  for (let elemento of list) {
    if (!resultado.includes(elemento)) resultado.push(elemento);
  }
  return resultado;
}
console.log(removeDuplicates(duplicates));

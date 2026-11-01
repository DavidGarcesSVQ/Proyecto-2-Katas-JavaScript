// EJERCICIO 14
const words = ['code', 'repeat', 'eat', 'sleep', 'code', 'enjoy', 'sleep', 'code', 'eat', 'sleep'];
function repeatCounter(list) {
  const resultado = {};
  for (let palabra of list) {
    if (resultado[palabra]) resultado[palabra]++;
    else resultado[palabra] = 1;
  }
  return resultado;
}
console.log(repeatCounter(words));

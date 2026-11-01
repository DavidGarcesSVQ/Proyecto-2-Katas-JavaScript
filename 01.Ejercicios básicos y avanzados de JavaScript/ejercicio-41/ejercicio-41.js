// EJERCICIO 41
function rollDice(sides) {
  if (sides < 1 || !Number.isInteger(sides)) return 'El número de caras debe ser un entero positivo.';
  return Math.floor(Math.random() * sides) + 1;
}
console.log('Resultado del dado:', rollDice(6));
console.log('Resultado del dado de 20 caras:', rollDice(20));

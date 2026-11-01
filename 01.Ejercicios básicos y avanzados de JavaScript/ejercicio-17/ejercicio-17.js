// EJERCICIO 17
const alien17 = { name: 'Xenomorph', species: 'Xenomorph XX121', origin: 'Unknown', weight: 180 };
for (let propiedad in alien17) {
  console.log(`La propiedad ${propiedad} tiene cómo valor: ${alien17[propiedad]}`);
}

// EJERCICIO 33
const capitals33 = {
  Spain: 'Madrid', France: 'Paris', Italy: 'Rome', Germany: 'Berlin', Portugal: 'Lisbon',
  Poland: 'Warsaw', Greece: 'Athens', Austria: 'Vienna', Hungary: 'Budapest', Ireland: 'Dublin'
};
function getCapital(country) {
  if (capitals33[country]) return capitals33[country];
  else return 'No tenemos registrada la capital de ese país.';
}
console.log(getCapital('Spain'));
console.log(getCapital('France'));
console.log(getCapital('Japan'));

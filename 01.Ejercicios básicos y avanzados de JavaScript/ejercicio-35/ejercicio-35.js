// EJERCICIO 35
const mutants35 = [
  { name: 'Wolverine', power: 'regeneration' }, { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' }, { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' }, { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' }, { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' }, { name: 'Nightcrawler', power: 'teleportation' }
];
function findMutantByPower(mutants, power) {
  const foundMutants = [];
  for (let mutant of mutants) if (mutant.power === power) foundMutants.push(mutant.name);
  if (foundMutants.length > 0) return 'Mutantes encontrados: ' + foundMutants.join(', ');
  else return 'No se ha encontrado ningún mutante con ese poder.';
}
console.log(findMutantByPower(mutants35, 'telepathy'));
console.log(findMutantByPower(mutants35, 'telekinesis'));
console.log(findMutantByPower(mutants35, 'flight'));

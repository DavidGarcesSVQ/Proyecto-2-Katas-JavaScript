// EJERCICIO 24
const characters24 = [
  { name: 'Luke Skywalker', species: 'Human' }, { name: 'Darth Vader', species: 'Human' },
  { name: 'Chewbacca', species: 'Wookiee' }, { name: 'Leia Organa', species: 'Human' },
  { name: 'R2-D2', species: 'Droid' }, { name: 'C-3PO', species: 'Droid' },
  { name: 'Obi-Wan Kenobi', species: 'Human' }, { name: 'Yoda', species: 'Unknown' },
  { name: 'Han Solo', species: 'Human' }
];
const humanCharacters24 = [];
for (let character of characters24) if (character.species === 'Human') humanCharacters24.push(character);
console.log(humanCharacters24);

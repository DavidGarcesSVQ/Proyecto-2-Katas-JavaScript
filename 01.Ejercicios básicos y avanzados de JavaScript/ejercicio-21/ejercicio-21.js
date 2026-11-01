// EJERCICIO 21
const users21 = [
  { name: 'Tony', years: 43 }, { name: 'Peter', years: 18 }, { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 }, { name: 'Khamala', years: 16 }
];
console.log('Usuarios menores de edad:');
for (let user of users21) if (user.years < 18) console.log(user.name);
console.log('Usuarios mayores de edad:');
for (let user of users21) if (user.years >= 18) console.log(user.name);

// EJERCICIO 18
const placesToTravel18 = [
  { id: 5, name: 'Japan' }, { id: 11, name: 'Venecia' }, { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' }, { id: 44, name: 'Filipinas' }, { id: 59, name: 'Madagascar' }
];
for (let i = 0; i < placesToTravel18.length; i++) {
  if (placesToTravel18[i].id === 11 || placesToTravel18[i].id === 40) {
    placesToTravel18.splice(i, 1);
    i--;
  }
}
console.log(placesToTravel18);

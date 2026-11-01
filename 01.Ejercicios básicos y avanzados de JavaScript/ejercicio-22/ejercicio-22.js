// EJERCICIO 22
const fruits22 = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule22 = [
  { name: 'Heura', isVegan: true }, { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true }, { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true }, { name: 'Pasta', isVegan: true }
];
let fruitIndex22 = 0;
for (let i = 0; i < foodSchedule22.length; i++) {
  if (foodSchedule22[i].isVegan === false) {
    foodSchedule22[i].name = fruits22[fruitIndex22];
    foodSchedule22[i].isVegan = true;
    fruitIndex22++;
  }
}
console.log(foodSchedule22);

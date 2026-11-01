import './style.css';

console.log("===== EJERCICIO 2 =====");

// 2.1 COPIAR UN ARRAY

const pointsList = [32, 54, 21, 64, 75, 43];

const pointsListCopy = [...pointsList];

console.log("2.1 Array original:", pointsList);
console.log("2.1 Copia:", pointsListCopy);


// 2.2 COPIAR UN OBJETO

const toy = {
    name: 'Bus laiyiar',
    date: '20-30-1995',
    color: 'multicolor'
};

const toyCopy = { ...toy };

console.log("2.2 Objeto original:", toy);
console.log("2.2 Copia:", toyCopy);


// 2.3 UNIR DOS ARRAYS

const pointsLis2 = [54, 87, 99, 65, 32];

const pointsCombined = [...pointsList, ...pointsLis2];

console.log("2.3 Arrays unidos:", pointsCombined);


// 2.4 FUSIONAR DOS OBJETOS

const toyUpdate = {
    lights: 'rgb',
    power: ['Volar like a dragon', 'MoonWalk']
};

const toyComplete = {
    ...toy,
    ...toyUpdate
};

console.log("2.4 Objetos fusionados:", toyComplete);


// 2.5 ELIMINAR UNA POSICIÓN SIN MODIFICAR EL ORIGINAL

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsCopy = [
    ...colors.slice(0, 2),
    ...colors.slice(3)
];

console.log("2.5 Array original:", colors);
console.log("2.5 Array sin amarillo:", colorsCopy);

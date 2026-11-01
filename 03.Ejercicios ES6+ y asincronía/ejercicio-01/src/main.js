import './style.css';

console.log("===== EJERCICIO 1 =====");

// 1.1
const game = {
    title: 'The Last of Us 2',
    gender: ['action', 'zombie', 'survival'],
    year: 2020
};

const { title, gender, year } = game;

console.log("1.1 Título:", title);
console.log("1.1 Género:", gender);
console.log("1.1 Año:", year);


// 1.2
const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits;

console.log("1.2 Fruta 1:", fruit1);
console.log("1.2 Fruta 2:", fruit2);
console.log("1.2 Fruta 3:", fruit3);


// 1.3
const animalFunction = () => {
    return {
        name: 'Bengal Tiger',
        race: 'Tiger'
    };
};

const { name, race } = animalFunction();

console.log("1.3 Nombre:", name);
console.log("1.3 Raza:", race);


// 1.4
const car = {
    name: 'Mazda 6',
    itv: [2015, 2011, 2020]
};

const { name: carName, itv } = car;

const [year1, year2, year3] = itv;

console.log("1.4 Coche:", carName);
console.log("1.4 ITV 1:", year1);
console.log("1.4 ITV 2:", year2);
console.log("1.4 ITV 3:", year3);

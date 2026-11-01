import './style.css';

console.log("===== EJERCICIO 3: MAP =====");

// 3.1 OBTENER LOS NOMBRES DE LOS USUARIOS

const users = [
    {id: 1, name: 'Abel'},
    {id: 2, name: 'Julia'},
    {id: 3, name: 'Pedro'},
    {id: 4, name: 'Amanda'}
];

const nombres = users.map(user => user.name);

console.log("3.1 Nombres:", nombres);


// 3.2 CAMBIAR LOS NOMBRES QUE EMPIEZAN POR A

const nombresModificados = users.map(user => {
    if (user.name.startsWith('A')) {
        return 'Anacleto';
    }

    return user.name;
});

console.log("3.2 Nombres modificados:", nombresModificados);


// 3.3 AÑADIR VISITADO A LAS CIUDADES

const cities = [
    {isVisited: true, name: 'Tokyo'},
    {isVisited: false, name: 'Madagascar'},
    {isVisited: true, name: 'Amsterdam'},
    {isVisited: false, name: 'Seul'}
];

const ciudadesVisitadas = cities.map(city => {
    if (city.isVisited) {
        return city.name + ' (Visitado)';
    }

    return city.name;
});

console.log("3.3 Ciudades:", ciudadesVisitadas);

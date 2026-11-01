import './style.css';

console.log("===== EJERCICIO 8: API JUEGO DE TRONOS =====");

// 1. SELECCIONAR LOS ELEMENTOS HTML
const characterSelect = document.querySelector('#character-list');
const characterImage = document.querySelector('#character-image');

// 2. FUNCIÓN PARA OBTENER LOS PERSONAJES DE LA API
async function loadCharacters() {

    try {

        // Realizar la petición a la API
        const response = await fetch(
            'https://thronesapi.com/api/v2/Characters'
        );

        // Comprobar que la respuesta es correcta
        if (!response.ok) {
            throw new Error('Error al obtener los personajes');
        }

        // Convertir la respuesta a formato JSON
        const characters = await response.json();

        console.log("Personajes recibidos:", characters);

        // 3. LIMPIAR EL DESPLEGABLE
        characterSelect.innerHTML = '';

        // Crear una opción inicial
        const initialOption = document.createElement('option');
        initialOption.value = '';
        initialOption.textContent = 'Selecciona un personaje';

        characterSelect.appendChild(initialOption);

        // 4. CREAR UNA OPCIÓN PARA CADA PERSONAJE
        characters.forEach((character, index) => {

            const option = document.createElement('option');

            option.value = index;
            option.textContent = character.fullName;

            characterSelect.appendChild(option);

        });

        // 5. DETECTAR CUANDO SE SELECCIONA UN PERSONAJE
        characterSelect.addEventListener('change', function(event) {

            const selectedIndex = event.target.value;

            // Si no hay personaje seleccionado, borrar la imagen
            if (selectedIndex === '') {
                characterImage.src = '';
                return;
            }

            // Obtener el personaje seleccionado
            const selectedCharacter = characters[selectedIndex];

            // Mostrar su imagen
            characterImage.src = selectedCharacter.imageUrl;

            // Mostrar su nombre en la consola
            console.log("Personaje seleccionado:", selectedCharacter.fullName);

        });

    } catch (error) {

        console.error("Error:", error);
        characterSelect.innerHTML = '<option>Error al cargar personajes</option>';

    }

}

// 6. EJECUTAR LA FUNCIÓN
loadCharacters();

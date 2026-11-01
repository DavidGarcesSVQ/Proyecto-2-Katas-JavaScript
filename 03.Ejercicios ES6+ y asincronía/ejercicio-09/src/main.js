import './style.css';

console.log("===== EJERCICIO 9: POKEMON ALEATORIO =====");

// 1. SELECCIONAR LOS ELEMENTOS HTML
const pokemonImage = document.querySelector('#pokemon-image');
const pokemonName = document.querySelector('#pokemon-name');

// 2. GENERAR UN NUMERO ALEATORIO ENTRE 1 Y 151
const randomPokemonId = Math.floor(Math.random() * 151) + 1;

console.log("Número de Pokémon generado:", randomPokemonId);

// 3. CREAR LA FUNCION PARA OBTENER EL POKEMON
async function loadRandomPokemon() {

    try {

        // Realizar la petición a la PokeAPI
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`
        );

        // Comprobar que la respuesta es correcta
        if (!response.ok) {
            throw new Error('No se ha podido obtener el Pokémon');
        }

        // Convertir la respuesta a JSON
        const pokemon = await response.json();

        // 4. MOSTRAR EL NOMBRE DEL POKEMON
        pokemonName.textContent =
            pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

        // 5. MOSTRAR SU IMAGEN
        pokemonImage.src =
            pokemon.sprites.other['official-artwork'].front_default;

        console.log("Pokémon encontrado:", pokemon.name);
        console.log("Imagen:", pokemon.sprites.other['official-artwork'].front_default);

    } catch (error) {

        console.error("Error al cargar el Pokémon:", error);
        pokemonName.textContent = 'No se ha podido cargar el Pokémon';

    }

}

// 6. EJECUTAR LA FUNCION
loadRandomPokemon();

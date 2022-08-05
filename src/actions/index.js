import axios from 'axios';

const ROOT_URL = "https://pokedexbackend.herokuapp.com/pokemon/";

export const POKE_LIST = "POKE_LIST";
export const POKE_DETAILS = "POKE_DETAILS";

export function fetchPokemons(){
    const pokemons = axios.get(ROOT_URL)
    .then(response => {return response})
    .catch(error => console.log(error));

    return {
        type: POKE_LIST,
        payload: pokemons
    }
}

export function selectPokemon(num){
    const pokemon = axios.get(`${ROOT_URL}${num + 1}`)
    .then(response => {return response})
    .catch(error => console.log(error));

    return {
        type: POKE_DETAILS,
        payload: pokemon
    }
}

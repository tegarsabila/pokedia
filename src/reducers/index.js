import { combineReducers } from 'redux';
import { POKE_LIST, POKE_DETAILS } from '../actions'

function Pokemons(state = {isLoading: true}, action){
    switch(action.type){
        case `${POKE_LIST}_PENDING`:
            return Object.assign({}, state, {
                isLoading: true,
                data: null
            });

        case `${POKE_LIST}_FULFILLED`:
            return Object.assign({}, state, {
                isLoading: false,
                data: action.payload.data
            });

        default:    
            return state;
    }
}

function SelectedPokemon(state = {isLoading: true, firstLoad: true}, action){
    switch(action.type){
        case `${POKE_DETAILS}_PENDING`:
            return Object.assign({}, state, {
                isLoading: true,
                firstLoad: false,
                data: null
            });

        case `${POKE_DETAILS}_FULFILLED`:
            return Object.assign({}, state, {
                isLoading: false,
                data: action.payload.data
            });

        default:    
            return state;
    }
}

const rootReducer = combineReducers({
    pokemons: Pokemons,
    selectedPokemon: SelectedPokemon,
});

export default rootReducer;
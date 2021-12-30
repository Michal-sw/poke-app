import types from './types';

const pokemonInitState = {
  pokemons: [],
  loading: false,
  err: ''
}

export const pokemonReducer = (state = pokemonInitState, action) => {
    switch(action.type) {
      case types.POKEMON_LIST_REQUEST:
        return { ...state, loading: true };
      case types.POKEMON_LIST_SUCCESS:
        return { ...state, loading: false, pokemons: action.payload };
      case types.POKEMON_LIST_FAILURE:
        return { ...state, loading: false, err: action.payload };
      default:
        return state;
    }
}
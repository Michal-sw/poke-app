import types from './types';

const pokemonInitState = {
  pokemons: [],
  loading: false,
  err: '',
  query: new URLSearchParams(),
  maxPage: 0,
}

export const pokemonReducer = (state = pokemonInitState, action) => {
    switch(action.type) {
      case types.POKEMON_LIST_REQUEST:
        return { ...state, loading: true };
      case types.POKEMON_LIST_SUCCESS:
        return { ...state, loading: false, pokemons: action.payload.pokemons, maxPage: action.payload.maxPage };
      case types.POKEMON_LIST_FAILURE:
        return { ...state, loading: false, err: action.payload };
      case types.CHANGE_QUERY:
        return { ...state, query: action.payload }

      default:
        return state;
    }
}
import { createAction } from "redux-api-middleware"
import types from './types';


export const getPokemons = (query) => {
  
  return createAction({
    endpoint: `http://localhost:3001/pokemons?${query}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    types: [
      types.POKEMON_LIST_REQUEST,
      types.POKEMON_LIST_SUCCESS,
      types.POKEMON_LIST_FAILURE
    ]
  })
};

export const getPokemon = (name) => {
  return createAction({
    endpoint: `http://localhost:3001/pokemons/${name}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    types: [
      types.POKEMON_REQUEST,
      types.POKEMON_SUCCESS,
      types.POKEMON_FAILURE
    ]
  })
};

export const getPokemonMoves = (name) => {
  return createAction({
    endpoint: `http://localhost:3001/pokemons/${name}/moves`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    types: [
      types.POKEMON_MOVES_REQUEST,
      types.POKEMON_MOVES_SUCCESS,
      types.POKEMON_MOVES_FAILURE
    ]
  })
};
import { createAction } from "redux-api-middleware"
import types from './types';


export const getPokemons = (page) => {
  return createAction({
    endpoint: `http://localhost:5000/pokemons?page=${page}`,
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
}
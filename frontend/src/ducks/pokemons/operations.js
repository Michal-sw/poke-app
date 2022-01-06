import { createAction } from "redux-api-middleware"
import types from './types';


export const getPokemons = (query) => {
  console.log(query)
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
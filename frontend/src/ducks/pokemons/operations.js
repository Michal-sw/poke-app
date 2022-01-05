import { createAction } from "redux-api-middleware"
import types from './types';


export const getPokemons = (page) => {
  console.log(page)
  return createAction({
    endpoint: `http://localhost:3001/pokemons?page=${page}&limit=30`,
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
import { createAction } from "redux-api-middleware"
import types from './types';


export const getMoves = (query) => {
  return createAction({
    endpoint: `http://localhost:3001/moves?${query}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    types: [
      types.MOVE_LIST_REQUEST,
      types.MOVE_LIST_SUCCESS,
      types.MOVE_LIST_FAILURE
    ]
  })
};

export const getMove = (name) => {
  return createAction({
    endpoint: `http://localhost:3001/moves/${name}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    types: [
      types.MOVE_REQUEST,
      types.MOVE_SUCCESS,
      types.MOVE_FAILURE
    ]
  })
};

export const getMovePokemons = (name) => {
  return createAction({
    endpoint: `http://localhost:3001/moves/${name}/pokemons`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    types: [
      types.MOVE_POKEMONS_REQUEST,
      types.MOVE_POKEMONS_SUCCESS,
      types.MOVE_POKEMONS_FAILURE
    ]
  })
};

export const addMove = (move) => {
  return createAction({
    endpoint: `http://localhost:3001/moves`,
    body: JSON.stringify(move),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    types: [
      types.MOVE_ADD_REQUEST,
      types.MOVE_ADD_SUCCESS,
      types.MOVE_ADD_FAILURE
    ]
  })
};


export const editMove = (move) => {
  console.log(move.alias)
  return createAction({
    endpoint: `http://localhost:3001/moves/${move.alias}/edit`,
    body: JSON.stringify(move),
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    types: [
      types.MOVE_EDIT_REQUEST,
      types.MOVE_EDIT_SUCCESS,
      types.MOVE_EDIT_FAILURE
    ]
  })
};
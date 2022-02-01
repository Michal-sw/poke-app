import { createAction } from "redux-api-middleware"
import types from './types';
const endpoint = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : 'https://localhost:3001/'

export const getMoves = (query) => {
  return createAction({
    endpoint: `${endpoint}moves?${query}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
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
    endpoint: `${endpoint}moves/${name}`,
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
    endpoint: `${endpoint}moves/${name}/pokemons`,
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
    endpoint: `${endpoint}moves`,
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
  return createAction({
    endpoint: `${endpoint}moves/${move.alias}/edit`,
    body: JSON.stringify(move),
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${document.cookie.split(';').find(row => row.startsWith('token=')).split('=')[1]}`
    },
    types: [
      types.MOVE_EDIT_REQUEST,
      types.MOVE_EDIT_SUCCESS,
      types.MOVE_EDIT_FAILURE
    ]
  })
};

export const deleteMove = (name) => {
  return createAction({
    endpoint: `${endpoint}moves/${name}`,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    types: [
      types.MOVE_DELETE_REQUEST,
      types.MOVE_DELETE_SUCCESS,
      types.MOVE_DELETE_FAILURE
    ]
  })
};
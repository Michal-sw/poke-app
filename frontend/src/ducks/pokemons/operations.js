import { createAction } from "redux-api-middleware"
import types from './types';
import mqttTypes from '../mqtt_handler/types';
const endpoint = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : 'https://localhost:3001/'
const protectedResourceEndpoint = 'http://localhost:4000/spa/pokemons';

export const getPokemons = (query, token) => {
  const oldEndpoint = `${endpoint}pokemons?${query}`;
  const protectedResourceEndpoint = `http://localhost:4000/spa/pokemons?${query}`;

  return createAction({
    endpoint: protectedResourceEndpoint,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token || ""}`
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
    endpoint: `${endpoint}pokemons/${name}`,
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

export const getEnemyFightPokemon = (name) => {
  return createAction({
    endpoint: `${endpoint}pokemons/${name}/moves?isFight=true`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    types: [
      'ENEMY_POKEMON_REQUEST',
      mqttTypes.ENEMY_POKEMON_RECEIVED,
      'ENEMY_POKEMON_FAIL'
    ]
  })
};


export const getPokemonMoves = (name) => {
  return createAction({
    endpoint: `${endpoint}pokemons/${name}/moves`,
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

export const addPokemon = (pokemon) => {
  return createAction({
    endpoint: `${endpoint}pokemons`,
    body: JSON.stringify(pokemon),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    types: [
      types.POKEMON_ADD_REQUEST,
      types.POKEMON_ADD_SUCCESS,
      types.POKEMON_ADD_FAILURE
    ]
  })
};

export const editPokemon = (pokemon) => {

  return createAction({
    endpoint: `${endpoint}pokemons/${pokemon.alias}/edit`,
    body: JSON.stringify(pokemon),
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${document.cookie.split(';').find(row => row.startsWith('token=')).split('=')[1]}`
    },
    types: [
      types.POKEMON_EDIT_REQUEST,
      types.POKEMON_EDIT_SUCCESS,
      types.POKEMON_EDIT_FAILURE
    ]
  })
};

export const deletePokemon = (name) => {
  return createAction({
    endpoint: `${endpoint}pokemons/${name}`,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${document.cookie.split(';').find(row => row.startsWith('token=')).split('=')[1]}`
    },
    types: [
      types.POKEMON_DELETE_REQUEST,
      types.POKEMON_DELETE_SUCCESS,
      types.POKEMON_DELETE_FAILURE
    ]
  })
};
import thunk from 'redux-thunk';
import { createMiddleware } from 'redux-api-middleware';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import logger from 'redux-logger';
import { pokemonReducer } from './pokemons/reducers';
import { typeReducer } from './types/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducers = combineReducers(
  {
    pokemons: pokemonReducer,
    types: typeReducer
  }
)

const store = createStore(combinedReducers,
  composeEnhancers(applyMiddleware(thunk, createMiddleware(), logger)));

export default store;
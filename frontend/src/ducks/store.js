import thunk from 'redux-thunk';
import { createMiddleware } from 'redux-api-middleware';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import logger from 'redux-logger';
import { pokemonReducer } from './pokemons/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducers = combineReducers(
  {
  pokemons: pokemonReducer,
  }
)

const store = createStore(combinedReducers,
  composeEnhancers(applyMiddleware(thunk, createMiddleware(), logger)));

export default store;
import thunk from 'redux-thunk';
import { createMiddleware } from 'redux-api-middleware';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import logger from 'redux-logger';
import mqttHandler from '../middlewares/mqttHandler';
import { pokemonReducer } from './pokemons/reducers';
import { moveReducer } from './moves/reducers';
import { typeReducer } from './types/reducers';
import { mqttReducer } from './mqtt_handler/reducers';
import apiErrorHandler from '../middlewares/apiErrorHandler';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducers = combineReducers(
  {
    pokemons: pokemonReducer,
    moves: moveReducer,
    types: typeReducer,
    mqtt: mqttReducer
  }
)

const store = createStore(combinedReducers,
  composeEnhancers(applyMiddleware(thunk, createMiddleware(), apiErrorHandler, mqttHandler, logger)));

export default store;
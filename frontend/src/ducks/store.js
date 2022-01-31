import thunk from 'redux-thunk';
import { createMiddleware } from 'redux-api-middleware';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import logger from 'redux-logger';
import mqttHandler from '../middlewares/mqttHandler';
import { pokemonReducer } from './pokemons/reducers';
import { moveReducer } from './moves/reducers';
import { typeReducer } from './types/reducers';
import { mqttReducer, fightEnemyReducer, fightClientReducer } from './mqtt_handler/reducers';
import apiErrorHandler from '../middlewares/apiErrorHandler';
import fightEndHandler from '../middlewares/fightEndHandler';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducers = combineReducers(
  {
    pokemons: pokemonReducer,
    moves: moveReducer,
    types: typeReducer,
    mqtt: mqttReducer,
    fightEnemy: fightEnemyReducer,
    fightClient:  fightClientReducer,
  }
)

const store = createStore(combinedReducers,
  composeEnhancers(
    applyMiddleware(
      thunk,
      createMiddleware(),
      apiErrorHandler,
      mqttHandler,
      fightEndHandler,
      logger
    )
  ));

export default store;
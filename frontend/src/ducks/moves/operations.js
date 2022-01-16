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

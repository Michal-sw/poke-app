import { createAction } from "redux-api-middleware"
import types from './types';


export const getTypes = () => {
  
  return createAction({
    endpoint: `http://localhost:3001/types`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    types: [
      types.TYPES_LIST_REQUEST,
      types.TYPES_LIST_SUCCESS,
      types.TYPES_LIST_FAILURE
    ]
  })
};
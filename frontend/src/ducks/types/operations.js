import { createAction } from "redux-api-middleware"
import types from './types';
const endpoint = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : 'https://localhost:3001/'


export const getTypes = () => {
  
  return createAction({
    endpoint: `${endpoint}types`,
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
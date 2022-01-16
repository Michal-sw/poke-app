import types from './types';

const changeQueryAction = (query) => ({
  type: types.POKEMON_CHANGE_QUERY,
  payload: query
})

const actions = {
  changeQueryAction
};

export default actions;
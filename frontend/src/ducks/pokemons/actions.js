import types from './types';

const changeQueryAction = (query) => ({
  type: types.CHANGE_QUERY,
  payload: query
})

const actions = {
  changeQueryAction
};

export default actions;
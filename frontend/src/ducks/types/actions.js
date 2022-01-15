import types from './types';

const changeTypeQueryAction = (query) => ({
  type: types.TYPES_CHANGE_QUERY,
  payload: query
})

const actions = {
  changeTypeQueryAction
};

export default actions;
import types from './types';

const typeInitState = {
  types: [],
  selectOptions: [],
  loading: false,
  err: '',
}

export const typeReducer = (state = typeInitState, action) => {
    switch(action.type) {
      case types.TYPES_LIST_REQUEST:
        return { ...state, loading: true };
      case types.TYPES_LIST_SUCCESS:
        return { ...state, loading: false, types: action.payload, selectOptions: action.payload.map(type => ({ label: type.name, value: type._id, color: type.color })) };
      case types.TYPES_LIST_FAILURE:
        return { ...state, loading: false, err: action.payload };

      default:
        return state;
    }
}
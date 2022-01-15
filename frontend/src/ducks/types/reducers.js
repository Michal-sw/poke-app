import types from './types';

const typeInitState = {
  types: [],
  selectOptions: [],
  selectOptionsMap: { },
  loading: false,
  err: '',
  query: new URLSearchParams(),
}

export const typeReducer = (state = typeInitState, action) => {
    switch(action.type) {
      case types.TYPES_LIST_REQUEST:
        return { ...state, loading: true };
      case types.TYPES_LIST_SUCCESS:
        return { 
          ...state,
          loading: false,
          types: action.payload,
          selectOptions: action.payload.map(type => ({ 
            label: type.name,
            value: type._id,
            color: type.color
          })),
          selectOptionsMap: action.payload.reduce((prev, type) => ({
            ...prev,
            [type._id]: {
              label: type.name,
              value: type._id,
              color: type.color
            }}), { })
        };
      case types.TYPES_LIST_FAILURE:
        return { ...state, loading: false, err: action.payload };

      case types.TYPES_CHANGE_QUERY:
        return { ...state, query: action.payload }
  
      default:
        return state;
    }
}
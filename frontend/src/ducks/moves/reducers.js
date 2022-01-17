import types from './types';

const moveInitState = {
  moves: [],
  move: { },
  movePokemons: { move: '', pokemons: [] },
  loading: false,
  err: '',
  query: new URLSearchParams(),
  maxPage: 0,
}

export const moveReducer = (state = moveInitState, action) => {
    switch(action.type) {
      case types.MOVE_LIST_REQUEST:
        return { ...state, loading: true };
      case types.MOVE_LIST_SUCCESS:
        return { ...state, loading: false, moves: action.payload.moves, maxPage: action.payload.maxPage };
      case types.MOVE_LIST_FAILURE:
        return { ...state, loading: false, err: action.payload };

      case types.MOVE_REQUEST:
        return { ...state, loading: true };
      case types.MOVE_SUCCESS:
        return { ...state, loading: false, move: action.payload };
      case types.MOVE_FAILURE:
        return { ...state, loading: false, err: action.payload };


      case types.MOVE_POKEMONS_REQUEST:
        return { ...state, loading: true };
      case types.MOVE_POKEMONS_SUCCESS:
        return { ...state, loading: false, movePokemons: action.payload };
      case types.MOVE_POKEMONS_FAILURE:
        return { ...state, loading: false, err: action.payload };
    
      case types.MOVE_CHANGE_QUERY:
        return { ...state, query: action.payload }

      default:
        return state;
    }
}
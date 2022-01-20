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

      case types.MOVE_ADD_REQUEST:
        return { ...state, loading: true };
      case types.MOVE_ADD_SUCCESS:
        return { ...state, loading: false, moves: state.moves.map(move => move._id === action.payload._id ? action.payload : move) };
      case types.MOVE_ADD_FAILURE:
        return { ...state, loading: false, err: action.payload };
        
      case types.MOVE_EDIT_REQUEST:
        return { ...state, loading: true };
      case types.MOVE_EDIT_SUCCESS:
        return { ...state, loading: false, moves: state.moves.map(move => move._id === action.payload._id ? action.payload : move), move: action.payload };
      case types.MOVE_EDIT_FAILURE:
        return { ...state, loading: false, err: action.payload };

      case types.MOVE_DELETE_REQUEST:
        return { ...state, loading: true };
      case types.MOVE_DELETE_SUCCESS:
        return { ...state, loading: false, moves: state.moves.filter(move => move._id !== action.payload._id), move: { }, movePokemons: moveInitState.movePokemons };
      case types.MOVE_DELETE_FAILURE:
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
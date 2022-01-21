import pokemonTypes from '../ducks/pokemons/types'
import moveTypes from '../ducks/moves/types'

const apiErrorHandler = store => next => action => {
  if (action.type === pokemonTypes.POKEMON_ADD_FAILURE) alert(`Error adding pokemon - ${action.payload}`);
  if (action.type === pokemonTypes.POKEMON_EDIT_FAILURE) alert(`Error editing pokemon - ${action.payload}`);
  if (action.type === moveTypes.MOVE_ADD_FAILURE) alert(`Error adding move - ${action.payload}`);
  if (action.type === moveTypes.MOVE_EDIT_FAILURE) alert(`Error editing move - ${action.payload}`);
  return next(action)
} 

export default apiErrorHandler;
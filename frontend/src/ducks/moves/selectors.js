export const selectMoves = (state) => state.moves.moves;
export const selectMove = (state, props) => state.moves.moves.find(move => move.alias === props.match.params.name) || ( state.pokemons.pokemonMoves.moves.find(move => move.alias === props.match.params.name) || state.moves.move);
export const selectMovePokemons = (state) => state.moves.movePokemons.pokemons;
export const selectMovePokemonsName = (state) => state.moves.movePokemons.move;

export const selectMovesLoading = (state) => state.moves.loading;

export const selectMovesQuery = (state) => state.moves.query;
export const selectMovesQueryPage = (state) => state.moves.query.get('page') || 1;
export const selectMovesMaxPage = (state) => state.moves.maxPage;

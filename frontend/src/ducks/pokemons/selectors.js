export const selectPokemons = (state) => state.pokemons.pokemons;
export const selectPokemon = (state, props) => state.pokemons.pokemons.find(pokemon => pokemon.alias === props.match.params.name) || state.pokemons.pokemon ;
export const selectPokemonsLoading = (state) => state.pokemons.loading;
export const selectPokemonMoves = (state) => state.pokemons.pokemonMoves.moves;
export const selectPokemonMovesName = (state) => state.pokemons.pokemonMoves.pokemon;

export const selectPokemonsQuery = (state) => state.pokemons.query;
export const selectPokemonsQueryPage = (state) => state.pokemons.query.get('page') || 1;
export const selectPokemonsMaxPage = (state) => state.pokemons.maxPage;

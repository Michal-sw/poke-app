export const selectPokemons = (state) => state.pokemons.pokemons;
export const selectPokemon = (state, props) => state.pokemons.pokemons.find(pokemon => pokemon.alias === props.match.params.name) || { };
export const selectPokemonsLoading = (state) => state.pokemons.loading;

export const selectPokemonsQuery = (state) => state.pokemons.query;
export const selectPokemonsQueryPage = (state) => state.pokemons.query.get('page') || 1;
export const selectPokemonsMaxPage = (state) => state.pokemons.maxPage;

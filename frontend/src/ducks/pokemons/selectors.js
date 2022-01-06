export const selectPokemons = (state) => state.pokemons.pokemons;
export const selectPokemonsLoading = (state) => state.pokemons.loading;
export const selectPokemonsQuery = (state) => state.pokemons.query;
export const selectPokemonsQueryPage = (state) => state.pokemons.query.get('page');
export const selectPokemonsMaxPage = (state) => state.pokemons.maxPage;

import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectPokemonsLoading, selectPokemon } from '../../ducks/pokemons/selectors';
import { selectTypesSelectOptions, selectTypesLoading } from '../../ducks/types/selectors'

import { getPokemon } from '../../ducks/pokemons/operations';
import actions from '../../ducks/pokemons/actions';

import { getTypes } from '../../ducks/types/operations'


const PokemonDetail = ({pokemon}) => {
  return (
    <div>
      {pokemon.name}
    </div>
  )
};


const mapStateToProps = (state, props) => ({
  pokemon: selectPokemon(state, props)
});

const mapDispatchToProps = {
  getPokemon,
  getTypes
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonDetail));
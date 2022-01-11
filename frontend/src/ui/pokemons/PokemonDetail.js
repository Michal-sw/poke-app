import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectPokemonsLoading, selectPokemon } from '../../ducks/pokemons/selectors';
import { selectTypesSelectOptions, selectTypesLoading } from '../../ducks/types/selectors'

import { getPokemon } from '../../ducks/pokemons/operations';
import actions from '../../ducks/pokemons/actions';

import { getTypes } from '../../ducks/types/operations'

// Background Image wrzucic do Reduxa albo do publica
const PokemonDetail = ({ pokemon, getPokemon, name }, props) => {
  useEffect(() => {
    if (!pokemon.num) {
      getPokemon(name)
    }
  }, [])

  return (
    <div>
      {pokemon.name}
    </div>
  )
};


const mapStateToProps = (state, props) => ({
  name: props.match.params.name,
  pokemon: selectPokemon(state, props),
});

const mapDispatchToProps = {
  getPokemon,
  getTypes
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonDetail));
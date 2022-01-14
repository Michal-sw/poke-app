import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectPokemonsLoading, selectPokemon, selectPokemonMoves } from '../../ducks/pokemons/selectors';
import { selectTypesLoading, selectTypesSelectOptionsMap } from '../../ducks/types/selectors'

import { PokemonDetailViewContainer, PokemonDetailInfo, PokemonDetailPresentation } from '../styles/PokemonStyles';

import { getPokemon, getPokemonMoves } from '../../ducks/pokemons/operations';

import { getTypes } from '../../ducks/types/operations'
import PokemonOnGrassTile from '../components/PokemonOnGrassTile';
import PokemonStats from './PokemonStats';
import PokemonMoves from './PokemonMoves';

// Background Image wrzucic do publica
const PokemonDetail = ({ pokemon, getPokemon, getPokemonMoves, name, moves, typesMap, getTypes, typesLoading }, props) => {

  useEffect(() => {
    if (!pokemon.num) getPokemon(name);
    if (!typesMap[pokemon.types[0]] && !typesLoading) getTypes();
    if (moves[0]?._id !== pokemon.moves[0]) getPokemonMoves(name);
  }, [pokemon.num])

  return (
      <PokemonDetailViewContainer>
        <PokemonDetailPresentation>
          <PokemonOnGrassTile name={pokemon.alias} num={pokemon.num}></PokemonOnGrassTile>
        </PokemonDetailPresentation>

        <PokemonDetailInfo>
          <PokemonStats stats={pokemon.stats} />
          <PokemonMoves moves={moves} />
        </PokemonDetailInfo>

      </PokemonDetailViewContainer>
  )
};


const mapStateToProps = (state, props) => ({
  name: props.match.params.name,
  pokemon: selectPokemon(state, props),
  typesMap: selectTypesSelectOptionsMap(state),
  typesLoading: selectTypesLoading(state),
  moves: selectPokemonMoves(state),
});

const mapDispatchToProps = {
  getPokemon,
  getPokemonMoves,
  getTypes
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonDetail));
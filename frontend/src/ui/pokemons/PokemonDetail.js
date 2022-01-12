import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectPokemonsLoading, selectPokemon } from '../../ducks/pokemons/selectors';
import { selectTypesSelectOptionsMap } from '../../ducks/types/selectors'

import { PokemonDetailViewContainer, PokemonDetailInfo, PokemonDetailPresentation, PokemonDetailStatName, PokemonSprite} from '../styles/PokemonStyles';
import { StatBar, StatName, StatContainer, StatListContainer } from '../styles/MultiUsageStyles';

import { getPokemon } from '../../ducks/pokemons/operations';
import actions from '../../ducks/pokemons/actions';

import { getTypes } from '../../ducks/types/operations'
import PokemonOnGrassTile from '../components/PokemonOnGrassTile';

// Background Image wrzucic do Reduxa albo do publica
const PokemonDetail = ({ pokemon, getPokemon, name, typesMap, getTypes }, props) => {
  useEffect(() => {
    if (!pokemon.num) getPokemon(name);
    if (!typesMap[pokemon.types[0]]) getTypes();
  }, [])

  return (
      <PokemonDetailViewContainer>

        <PokemonDetailInfo>
          <StatListContainer>
            <StatContainer>
              <StatName>Attack</StatName>
              <StatBar max='150' value={pokemon.stats?.atk || 0} />
              {pokemon.stats?.atk}
            </StatContainer>
            <StatContainer>
              <StatName>Defense</StatName>
              <StatBar max='150' value={pokemon.stats?.def || 0} />
              {pokemon.stats?.def}
            </StatContainer>
            <StatContainer>
              <StatName>HP</StatName>
              <StatBar max='150' value={pokemon.stats?.hp || 0} />
              {pokemon.stats?.hp}
            </StatContainer>
            <StatContainer>
              <StatName>Special Attack</StatName>
              <StatBar max='150' value={pokemon.stats?.spa || 0} />
              {pokemon.stats?.spa}
            </StatContainer>
            <StatContainer>
              <StatName>Special Defense</StatName>
              <StatBar max='150' value={pokemon.stats?.spd || 0} />
              {pokemon.stats?.spd}
            </StatContainer>
            <StatContainer>
              <StatName>Speed</StatName>
              <StatBar max='150' value={pokemon.stats?.spe || 0} />
              {pokemon.stats?.spe}
            </StatContainer>
          </StatListContainer>
        </PokemonDetailInfo>

        <PokemonDetailPresentation>
          <PokemonOnGrassTile name={pokemon.alias} num={pokemon.num}></PokemonOnGrassTile>
        </PokemonDetailPresentation>

      </PokemonDetailViewContainer>
  )
};


const mapStateToProps = (state, props) => ({
  name: props.match.params.name,
  pokemon: selectPokemon(state, props),
  typesMap: selectTypesSelectOptionsMap(state)
});

const mapDispatchToProps = {
  getPokemon,
  getTypes
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonDetail));
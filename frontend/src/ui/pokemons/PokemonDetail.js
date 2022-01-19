import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectPokemon, selectPokemonsLoading } from '../../ducks/pokemons/selectors';
import { selectTypesLoading, selectTypesSelectOptionsMap } from '../../ducks/types/selectors'
import { getPokemon } from '../../ducks/pokemons/operations';
import { getTypes } from '../../ducks/types/operations'

import PokemonStats from './PokemonStats';
import PokemonMoves from './PokemonMoves';
import PokemonTypeLogos from './PokemonTypeLogos';
import Loading from '../components/Loading';
import PokemonOnGrassTile from '../components/PokemonOnGrassTile';

import { PokemonDetailViewContainer, PokemonDetailInfo } from '../styles/PokemonStyles';
import { MyButton, MyLink, NameLabel } from '../styles/MultiUsageStyles';

const PokemonDetail = ({ pokemon, getPokemon, name, typesMap, getTypes, typesLoading, loading }, props) => {

  useEffect(() => {
    if (pokemon.alias !== name) getPokemon(name);
    if (!typesMap[pokemon.types[0]] && !typesLoading) getTypes();
  }, [pokemon.alias])

  return (
      loading ? <Loading/>
      : <PokemonDetailViewContainer>
          <PokemonTypeLogos />
          <NameLabel style={{marginBottom: '-30px'}}>{pokemon.name}</NameLabel>
          <PokemonOnGrassTile name={pokemon.alias} num={pokemon.num}></PokemonOnGrassTile>
          <PokemonDetailInfo>
            <PokemonStats stats={pokemon.stats} />
            <PokemonMoves />
          </PokemonDetailInfo>
          <MyLink to={`/pokemons/${pokemon.alias}/edit`}>
            <MyButton>Edit Pokemon</MyButton>
          </MyLink>
        </PokemonDetailViewContainer>
  )
};


const mapStateToProps = (state, props) => ({
  name: props.match.params.name,
  pokemon: selectPokemon(state, props),
  typesMap: selectTypesSelectOptionsMap(state),
  typesLoading: selectTypesLoading(state),
  loading: selectPokemonsLoading(state)
});

const mapDispatchToProps = {
  getPokemon,
  getTypes
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonDetail));
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectPokemon, selectPokemonMoves, selectPokemonsLoading } from '../../ducks/pokemons/selectors';
import { selectTypesLoading, selectTypesSelectOptionsMap } from '../../ducks/types/selectors'
import { getPokemon } from '../../ducks/pokemons/operations';
import { getTypes } from '../../ducks/types/operations'
import actions from '../../ducks/mqtt_handler/actions';

import PokemonStats from './PokemonStats';
import PokemonMoves from './PokemonMoves';
import PokemonTypeLogos from './PokemonTypeLogos';
import Loading from '../components/Loading';
import PokemonOnGrassTile from '../components/PokemonOnGrassTile';

import { PokemonDetailViewContainer, PokemonDetailInfo } from '../styles/PokemonStyles';
import { MyButton, MyLink, NameLabel } from '../styles/MultiUsageStyles';

const PokemonDetail = ({ pokemon, getPokemon, pokemonMoves, name, typesMap, getTypes, typesLoading, loading, chooseFightPokemon }, props) => {

  useEffect(() => {
    if (pokemon.alias !== name) getPokemon(name);
    if (!typesMap[pokemon.types[0]] && !typesLoading) getTypes();
  }, [pokemon.alias])

  const handleFightChoose = () => {
    chooseFightPokemon({ pokemon, pokemonMoves: pokemonMoves.slice(0,4) })
  };

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
          <MyLink to={`/pokemons/fight`}>
            <MyButton onClick={handleFightChoose}>Select for fight!</MyButton>
          </MyLink>
        </PokemonDetailViewContainer>
  )
};


const mapStateToProps = (state, props) => ({
  name: props.match.params.name,
  pokemon: selectPokemon(state, props),
  pokemonMoves: selectPokemonMoves(state),
  typesMap: selectTypesSelectOptionsMap(state),
  typesLoading: selectTypesLoading(state),
  loading: selectPokemonsLoading(state)
});

const mapDispatchToProps = {
  getPokemon,
  getTypes,
  chooseFightPokemon: actions.clientPokemonChosen,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonDetail));
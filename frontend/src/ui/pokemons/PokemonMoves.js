import { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { selectPokemon, selectPokemonMoves, selectPokemonMovesName, selectPokemonMovesLoading } from "../../ducks/pokemons/selectors";
import { selectTypesSelectOptionsMap } from "../../ducks/types/selectors";
import { getPokemonMoves } from '../../ducks/pokemons/operations';

import { PokemonMoveCard } from '../styles/PokemonStyles'
import { ItemListFlexColumnContainer, MyLink } from "../styles/MultiUsageStyles";
import Loading from "../components/Loading";

const PokemonMoves = ({ moves, pokemon, name, getPokemonMoves, movesPokemonName, typesMap, loading }) => {

  useEffect(() => {
    if (pokemon.num && movesPokemonName !== name) getPokemonMoves(name);
  }, [pokemon.num]);

  return (
    loading ? <Loading/>
    :
    <ItemListFlexColumnContainer>
      {moves.map(move => (
        <MyLink to={`/moves/${move.alias}`} key={move.num}>
          <PokemonMoveCard type={typesMap[move.type]?.color}>
            <p>{move.name}</p>
            <p>Power: {move.power}</p>
          </PokemonMoveCard>
        </MyLink>
      ))}
    </ItemListFlexColumnContainer>
  )
}

  const mapStateToProps = (state, props) => ({
    name: props.match.params.name,
    moves: selectPokemonMoves(state),
    movesPokemonName: selectPokemonMovesName(state),
    pokemon: selectPokemon(state, props),
    typesMap: selectTypesSelectOptionsMap(state),
    loading: selectPokemonMovesLoading(state)
  });
  
  const mapDispatchToProps = {
    getPokemonMoves
  };
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonMoves));
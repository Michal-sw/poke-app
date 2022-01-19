import { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { selectMove, selectMovePokemons, selectMovePokemonsName, selectMovesLoading } from "../../ducks/moves/selectors";
import { selectTypesSelectOptionsMap } from "../../ducks/types/selectors";
import { getMovePokemons } from '../../ducks/moves/operations';

import PokemonSpriteLogo from "../components/PokemonSpriteLogo";
import Loading from "../components/Loading";

import { MovePokemonsContainer, MovePokemonCard } from '../styles/MoveStyles';
import { BigText } from "../styles/MultiUsageStyles";
import { MyLink } from '../styles/MultiUsageStyles';


const MovePokemons = ({ pokemons, name, getMovePokemons, pokemonsMoveName, typesMap, loading }) => {

  useEffect(() => {
    if (pokemonsMoveName !== name) getMovePokemons(name);
  }, []);

  return (
    loading ? <Loading/> : 
      <MovePokemonsContainer>
        {pokemons.map(pokemon => (
          <MyLink to={`/pokemons/${pokemon.alias}`} key={pokemon.num}>
            <MovePokemonCard type={typesMap[pokemon.types[0]]?.color}>
              <BigText>{pokemon.name}</BigText>
              <PokemonSpriteLogo name={pokemon.name}/>
            </MovePokemonCard>
          </MyLink>
        ))}
      </MovePokemonsContainer>
  )
}

  const mapStateToProps = (state, props) => ({
    name: props.match.params.name,
    move: selectMove(state, props),
    pokemons: selectMovePokemons(state),
    pokemonsMoveName: selectMovePokemonsName(state),
    typesMap: selectTypesSelectOptionsMap(state),
    loading: selectMovesLoading(state)
  });
  
  const mapDispatchToProps = {
    getMovePokemons
  };
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovePokemons));
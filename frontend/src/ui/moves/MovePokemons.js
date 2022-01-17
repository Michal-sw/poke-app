import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { BigText } from "../styles/MultiUsageStyles";
import { MyLink } from '../styles/MultiUsageStyles';
import { getMovePokemons } from '../../ducks/moves/operations';
import { useEffect } from "react";
import { selectTypesSelectOptionsMap } from "../../ducks/types/selectors";
import { selectMove, selectMovePokemons, selectMovePokemonsName, selectMovesLoading } from "../../ducks/moves/selectors";
import PokemonSpriteLogo from "../components/PokemonSpriteLogo";
import Loading from "../components/Loading";

const MovePokemons = ({ pokemons, name, getMovePokemons, pokemonsMoveName, typesMap, loading }) => {

  useEffect(() => {
    if (pokemonsMoveName !== name) getMovePokemons(name);
  }, []);

  return (
    loading ? <Loading/> : 
      <MovePokemonsContainer>
        {pokemons.map(pokemon => (
          <MyLink to={`/pokemons/${pokemon.alias}`} key={pokemon.num}>
            <MoveCard type={typesMap[pokemon.types[0]]?.color}>
              <BigText>{pokemon.name}</BigText>
              <PokemonSpriteLogo name={pokemon.alias}/>
            </MoveCard>
          </MyLink>
        ))}
      </MovePokemonsContainer>
  )
}
const MovePokemonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: whitesmoke;
  padding: 7px;

  max-width: 850px;
  max-height: 500px;
  
  border: 4px solid black;
  border-style: ridge;
  border-radius: 20px;

  overflow-y: scroll;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const MoveCard = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-around;
  border-radius: 20px;
  background-color: white;
  transition: all 0.3s;
  box-shadow: ${props => `inset 0px 0px 2px 2px ${props.type}` || '0px 0px 5px 1px grey' };

  &:hover {
    background-color: ${props => props.type};
  }
  `;

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
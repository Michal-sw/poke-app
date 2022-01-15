import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { selectPokemon, selectPokemonMoves } from "../../ducks/pokemons/selectors";
import { ItemListContainer, ItemListFlexColumnContainer } from "../styles/MultiUsageStyles";
import { MyLink } from '../styles/MultiUsageStyles';
import { getPokemonMoves } from '../../ducks/pokemons/operations';
import { useEffect } from "react";
import { selectTypesSelectOptionsMap } from "../../ducks/types/selectors";

const PokemonMoves = ({ moves, pokemon, name, getPokemonMoves, typesMap }) => {

  useEffect(() => {
    if (moves[0]?._id !== pokemon.moves[0]) getPokemonMoves(name);
  }, [pokemon.num])

  return (
    <ItemListFlexColumnContainer>
      {moves.map(move => (
        <MyLink to={`moves/${move.alias}`} key={move.num}>
          <MoveCard type={typesMap[move.type]?.color}>
            <p>{move.name}</p>
            <p>Power: {move.power}</p>
          </MoveCard>
        </MyLink>
      ))}
    </ItemListFlexColumnContainer>
  )
}


const MoveCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 2px;
  border-radius: 20px;
  padding: 10px;
  transition: all 0.3s;
  background-color: whitesmoke;
  box-shadow: ${props => `inset 0px 0px 1px 4px ${props.type}` || '0px 0px 5px 1px whitesmoke' };
  & > p {
    font-size: 1.2em;
    padding: 0px;
    margin: 0px;
  }
  &:hover {
    background-color: ${props => props.type};
  }
  `;

  const mapStateToProps = (state, props) => ({
    name: props.match.params.name,
    moves: selectPokemonMoves(state),
    pokemon: selectPokemon(state, props),
    typesMap: selectTypesSelectOptionsMap(state),
  });
  
  const mapDispatchToProps = {
    getPokemonMoves
  };
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonMoves));
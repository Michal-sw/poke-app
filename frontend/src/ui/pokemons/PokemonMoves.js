import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { selectPokemon, selectPokemonMoves } from "../../ducks/pokemons/selectors";
import { ItemListContainer, ItemListFlexColumnContainer } from "../styles/MultiUsageStyles";
import { MyLink } from '../styles/MultiUsageStyles';
import { getPokemonMoves } from '../../ducks/pokemons/operations';
import { useEffect } from "react";

const PokemonMoves = ({ moves, pokemon, name, getPokemonMoves }) => {

  useEffect(() => {
    if (moves[0]?._id !== pokemon.moves[0]) getPokemonMoves(name);
  }, [pokemon.num])

  return (
    <ItemListFlexColumnContainer>
      {moves.map(move => (
        <MyLink to={`moves/${move.alias}`} key={move.num}>
          <MoveCard>
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
  background-color: whitesmoke;
  margin: 2px;
  border-radius: 20px;
  font-size: 1.2em;
  padding: 10px;
  `;

  const mapStateToProps = (state, props) => ({
    name: props.match.params.name,
    moves: selectPokemonMoves(state),
    pokemon: selectPokemon(state, props),
  });
  
  const mapDispatchToProps = {
    getPokemonMoves
  };
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonMoves));
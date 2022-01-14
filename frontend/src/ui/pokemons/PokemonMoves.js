import styled from "styled-components";
import { ItemListContainer } from "../styles/MultiUsageStyles";

const PokemonMoves = ({ moves }) => {
  return (
    <ItemListContainer>
      {moves.map(move => (
        <MoveCard>
          <p>{move.name}</p>
          <p>Power: {move.power}</p>
        </MoveCard>
      ))}
    </ItemListContainer>
  )
}

export default PokemonMoves;

const MoveCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  background-color: whitesmoke;
  padding: 10px;
  border-radius: 20px;
  overflow-y: scroll;
  `;
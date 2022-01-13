import { ItemListContainer } from "../styles/MultiUsageStyles";

const PokemonMoves = ({ moves }) => {
  return (
    <ItemListContainer>
      {moves.map(move => (
        <p>{move.name}</p>
      ))}
    </ItemListContainer>
  )
}

export default PokemonMoves;
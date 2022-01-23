import { connect } from 'react-redux';
import { FightMove, FightMovesContainer } from '../styles/FightStyles';

const FightMoves = ({ pokemon }) => {
  return (
    <FightMovesContainer>
      {pokemon.moves.slice(0,3).map(move => (
        <FightMove>{move}</FightMove>
      ))}
    </FightMovesContainer>
  )
}

const mapStateToProps = (state, props) => ({
  pokemon: props.isEnemy ? state.mqtt.enemyPokemon : state.mqtt.clientPokemon,
  connectionClient: state.mqtt.client
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(FightMoves);
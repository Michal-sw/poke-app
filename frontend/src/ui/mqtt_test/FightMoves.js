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
  pokemon: props.isEnemy ? state.fightEnemy.pokemon : state.fightClient.pokemon,
  connectionClient: state.mqtt.client
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(FightMoves);
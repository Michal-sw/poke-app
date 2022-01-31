import { connect } from 'react-redux';
import { TypeStamp, FightMove, FightMovesContainer, FightMoveDetail } from '../styles/FightStyles';
import actions from '../../ducks/mqtt_handler/actions'
import { BigText } from '../styles/MultiUsageStyles';

const FightMoves = ({ pokemon, mqttClient, roomId, clientUsername, enemyUsername, isClientTurn, moveSent, typesSelectMap }) => {

  const handleMoveSelect = (move) => {
    if (isClientTurn) {
        mqttClient.publish(`fights/${roomId}`, JSON.stringify({
          author: clientUsername,
          target: enemyUsername,
          move: move.alias
      }));
      moveSent({ move: move.name, damage: move.power });
    }
  }


  return (
    <FightMovesContainer>
      {pokemon.moves.map(move => (
        <FightMove isClientTurn={isClientTurn} onClick={() => handleMoveSelect(move)}>
          <p>{move.name}</p>
          <FightMoveDetail>
            <p>{`Power: ${move.power}`}</p>
            <TypeStamp color={typesSelectMap[move.type].color}>{typesSelectMap[move.type].label}</TypeStamp>
          </FightMoveDetail>
        </FightMove>
      ))}
    </FightMovesContainer>
  )
}

const mapStateToProps = (state, props) => ({
  pokemon: props.isEnemy ? state.fightEnemy.pokemon : state.fightClient.pokemon,
  mqttClient: state.mqtt.client,
  roomId: state.mqtt.roomId,
  clientUsername: state.fightClient.username,
  enemyUsername: state.fightEnemy.username,
  isClientTurn: state.mqtt.isClientTurn,
  typesSelectMap: state.types.selectOptionsMap
});

const mapDispatchToProps = {
  moveSent: actions.moveSent
};

export default connect(mapStateToProps, mapDispatchToProps)(FightMoves);
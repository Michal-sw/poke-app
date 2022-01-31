import { connect } from 'react-redux';
import { TypeStamp, FightMove, FightMovesContainer, FightMoveDetail } from '../styles/FightStyles';
import actions from '../../ducks/mqtt_handler/actions'
import { selectTypesMap } from '../../ducks/types/selectors'
import { selectClientUsername, selectConnectionClient, selectEnemyUsername, selectIsClientTurn, selectRoomId } from '../../ducks/mqtt_handler/selectors';

const FightMoves = ({ clientPokemon, enemyPokemon, mqttClient, roomId, clientUsername, enemyUsername, isClientTurn, moveSent, typesMap }) => {

  const calculateDamage = (move) => {
    const checkEffectiveness = (effectivenessType) => {
      return typesMap[move.type][effectivenessType]
        .some(type => enemyPokemon.types.includes(type))
    }
    const isSuperEffective = checkEffectiveness('strengths');
    const isNotEffective = checkEffectiveness('weaknesses');
    const isImmune = checkEffectiveness('immunes');
    const effectivenessMultiplier = isSuperEffective ? 2 : isNotEffective ? 0.5 : isImmune ? 0 : 1;

    const damage = Math.round((move.power * effectivenessMultiplier * (clientPokemon.stats.atk / enemyPokemon.stats.def) / 4));
    const willHit = move.accuracy === 1 ? true : Math.floor(Math.random()*100) <= move.accuracy;

    return {damage, effectiveness: effectivenessMultiplier, willHit }
  }

  const handleMoveSelect = (move) => {
    const moveDamageDetails = calculateDamage(move)
    if (isClientTurn) {
        mqttClient.publish(`fights/${roomId}`, JSON.stringify({
          author: clientUsername,
          target: enemyUsername,
          move: move.alias,
          ...moveDamageDetails
      }));
      moveSent({
        move: move.name,
        author: clientUsername,
        damage: moveDamageDetails.damage,
        willHit: moveDamageDetails.willHit,
        message: !moveDamageDetails.willHit 
          ? 'it missed!'
          : moveDamageDetails.effectiveness === 2
            ? 'it was super effective!'
            : moveDamageDetails.effectiveness === 0.5
              ? "it's not very effective..."
              : moveDamageDetails.effectiveness === 0
                ? "pokemon is immune!"
                : '' 
      });
    }
  }


  return (
    <FightMovesContainer>
      {clientPokemon.moves.map(move => (
        <FightMove key={move._id} isClientTurn={isClientTurn} onClick={() => handleMoveSelect(move)}>
          <p>{move.name}</p>
          <FightMoveDetail>
            <p>{`Power: ${move.power}`}</p>
            <TypeStamp color={typesMap[move.type].color}>{typesMap[move.type].name}</TypeStamp>
          </FightMoveDetail>
        </FightMove>
      ))}
    </FightMovesContainer>
  )
}

const mapStateToProps = (state, props) => ({
  clientPokemon: props.isEnemy ? state.fightEnemy.pokemon : state.fightClient.pokemon,
  enemyPokemon: props.isEnemy ? state.fighClient.pokemon : state.fightEnemy.pokemon,
  mqttClient: selectConnectionClient(state),
  roomId: selectRoomId(state),
  clientUsername: selectClientUsername(state),
  enemyUsername: selectEnemyUsername(state),
  isClientTurn: selectIsClientTurn(state),
  typesMap: selectTypesMap(state)

});

const mapDispatchToProps = {
  moveSent: actions.moveSent
};

export default connect(mapStateToProps, mapDispatchToProps)(FightMoves);
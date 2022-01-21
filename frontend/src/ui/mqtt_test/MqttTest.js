import { connect } from 'react-redux';
import mqttActions from '../../ducks/mqtt_handler/actions'

const MqttTest = ({ connectionInit, messages, battleLog, enemyPokemon, clientPokemon }) => {

  return (
    <div>
      <button onClick={connectionInit} >Connect</button>
      <h2>Chat</h2>
      {messages.map((message, index) => (
        <p key={index}>
          {message}
        </p>
        )
      )}
      <h2>BattleLog</h2>
      {battleLog.map((message, index) => (
        <p key={index}>
          {message.move} - {message.damage}
        </p>
        )
      )}
      <h2>Enemy Pokemon</h2>
      {enemyPokemon.name}
    </div>
  )
};

const mapStateToProps = (state) => ({
  messages: state.mqtt.messages,
  enemyPokemon: state.mqtt.enemyPokemon,
  clientPokemon: state.mqtt.clientPokemon,
  battleLog: state.mqtt.battleLog
});

const mapDispatchToProps = {
  connectionInit: mqttActions.connectionInit,
};

export default connect(mapStateToProps, mapDispatchToProps)(MqttTest);
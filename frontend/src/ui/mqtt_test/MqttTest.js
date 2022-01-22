import { connect } from 'react-redux';
import mqttActions from '../../ducks/mqtt_handler/actions'
import PokemonAnimated from '../components/PokemonAnimated';
import { NameLabel } from '../styles/MultiUsageStyles'
import TopicConnect from './TopicConnect';

const MqttTest = ({ connectionClient, connectionInit, messages, battleLog, enemyPokemon, clientPokemon }) => {

  return (
    <div>
      {connectionClient
        ? <NameLabel>Connected</NameLabel>
        : <TopicConnect/>
      }

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
      {enemyPokemon.alias ? <PokemonAnimated alias={enemyPokemon.alias}/> : null}
      {enemyPokemon.name}
      <h2>Client Pokemon</h2>
      {clientPokemon.alias ? <PokemonAnimated alias={clientPokemon.alias}/> : null}
      {clientPokemon.name}

    </div>
  )
};

const mapStateToProps = (state) => ({
  messages: state.mqtt.messages,
  enemyPokemon: state.mqtt.enemyPokemon,
  clientPokemon: state.mqtt.clientPokemon,
  battleLog: state.mqtt.battleLog,
  connectionClient: state.mqtt.client
});

const mapDispatchToProps = {
  connectionInit: mqttActions.connectionInit,
};

export default connect(mapStateToProps, mapDispatchToProps)(MqttTest);
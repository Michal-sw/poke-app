import { connect } from 'react-redux';
import mqttActions from '../../ducks/mqtt_handler/actions'
import { AsideContainer, MessagesContainer } from '../styles/FightStyles'
import { BigText } from '../styles/MultiUsageStyles';

const MqttTest = ({ messages, battleLog }) => {

  return (
    <AsideContainer>
      <BigText>BattleLog</BigText>
      <MessagesContainer>
        {battleLog.map((message, index) => (
          <p key={index}>
            {message.move} - {message.damage}
          </p>)
        )}
      </MessagesContainer>
      <BigText>Chat</BigText>
      <MessagesContainer>
        {messages.map((message, index) => (
          <p key={index}>
            {message}
          </p>)
        )}
      </MessagesContainer>
    </AsideContainer>
  )
};

const mapStateToProps = (state) => ({
  messages: state.mqtt.messages,
  battleLog: state.mqtt.battleLog,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(MqttTest);
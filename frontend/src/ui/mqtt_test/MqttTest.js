import { connect } from 'react-redux';
import mqttActions from '../../ducks/mqtt_handler/actions'

const MqttTest = ({ connectionInit, messages }) => {

  return (
    <div>
      <button onClick={connectionInit} >Connect</button>
      {messages.map((message, index) => (
        <p key={index}>
          {message}
        </p>
        )
      )}
    </div>
  )
};

const mapStateToProps = (state) => ({
  messages: state.mqtt.messages
});

const mapDispatchToProps = {
  connectionInit: mqttActions.connectionInit,
};

export default connect(mapStateToProps, mapDispatchToProps)(MqttTest);
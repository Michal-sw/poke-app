import { useState } from 'react';
import { connect } from 'react-redux';
import mqttActions from '../../ducks/mqtt_handler/actions'
import { RoomIdSelector } from '../styles/FightStyles';
import { BigText, MyButton } from '../styles/MultiUsageStyles';

const ConnectionSetup = ({ connectionInit }) => {
  const [roomId, setRoomId] = useState(0);
  const [errMessage, setErrMessage] = useState('');

  const handleRoomChange = (input) => {
    setRoomId(input.target.value)
  };
  const handleConnect = () => {
    if (roomId > 0 && roomId <= 100) connectionInit(roomId)
    else setErrMessage('Room ID must be > 0 and <= 100')
  };

  return (
    <div>
      <RoomIdSelector>
        <BigText>Select room ID</BigText>
        {errMessage ? <BigText>{errMessage}</BigText> : null}
        <input type={'number'} onChange={handleRoomChange} max={100} min={1}/>
      </RoomIdSelector>
      <MyButton onClick={handleConnect}>Connect</MyButton>
    </div>
  )
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
  connectionInit: mqttActions.connectionInit,
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionSetup);
import { useState } from 'react';
import { connect } from 'react-redux';
import mqttActions from '../../ducks/mqtt_handler/actions'
import { RoomIdSelector } from '../styles/FightStyles';
import { BigText, MyButton, ItemListContainer } from '../styles/MultiUsageStyles';

const ConnectionSetup = ({ connectionInit }) => {
  const [roomId, setRoomId] = useState(0);
  const [username, setUsername] = useState('');
  const [errMessageRoom, setErrMessageRoom] = useState('');
  const [errMessageUsername, setErrMessageUsername] = useState('');

  const handleRoomChange = (input) => {
    setRoomId(input.target.value);
  };

  const handleUsernameChange = (input) => {
    setUsername(input.target.value);
  };

  const handleConnect = () => {
    if (roomId <= 0 || roomId >= 100) setErrMessageRoom('Room ID must be > 0 and <= 100');
    else if (username.length <= 0 || username.length > 17) setErrMessageUsername('Username must be set and shorter than 17 characters');
    else connectionInit({ roomId, username });
  };

  return (
    <div>
      <ItemListContainer >
      <RoomIdSelector>
        <BigText>Select room ID</BigText>
        {errMessageRoom ? <BigText>{errMessageRoom}</BigText> : null}
        <input type={'number'} onChange={handleRoomChange} max={100} min={1}/>
      </RoomIdSelector>
      <RoomIdSelector>
        <BigText>Select username</BigText>
        {errMessageUsername ? <BigText>{errMessageUsername}</BigText> : null}
        <input style={{ fontSize: '1.3em', minWidth: '120px' }} onChange={handleUsernameChange}/>
      </RoomIdSelector>
      </ItemListContainer>
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
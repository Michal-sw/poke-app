import { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { selectClientPokemon, selectClientUsername, selectConnectionClient, selectMessages, selectRoomId } from '../../ducks/mqtt_handler/selectors';
import { AsideSectionContainer, Message, MessageAuthor, MessageContent, MessageInput, MessageInputContainer, MessagesContainer } from '../styles/FightStyles'
import { BigText, MyButton } from '../styles/MultiUsageStyles';

const Chat = ({ messages, mqttClient, roomId, clientUsername }) => {
  const [messageInput, setMessageInput] = useState('');
  const lastMessageRef = useRef(null);

  useEffect(() => {
    lastMessageRef.current.scrollIntoView({});
    lastMessageRef.current.style.height = '30px';
  }, [messages.length])

  const handleMessageChange = (event) => {
    setMessageInput(event.target.value)
    event.target.style.height = "30px";
    event.target.style.height = `${event.target.scrollHeight}px`;  
   };

   const publishMessage = () => {
    mqttClient.publish(`fights/${roomId}`, JSON.stringify({
      author: clientUsername,
      chat: messageInput
    }));
    setMessageInput('');
   } 
  
  const handleMessageSend = () => {
    publishMessage()
  }

  const handleKeyboardStroke = (event) => {
    if (event.keyCode === 13 && !event.shiftKey) {
      publishMessage()
    }
  }

  return (
    <AsideSectionContainer>
      <BigText>Chat</BigText>
      <MessagesContainer>
        {messages.map((message, index) => (
          <Message key={index} isSpecial={message.author === 'system'}>
            {message.author === 'system' ? null : <MessageAuthor>{message.author}</MessageAuthor>}
            <MessageContent>{message.content}</MessageContent>
          </Message>)
        )}
        <div ref={lastMessageRef}/>
      </MessagesContainer>
      {mqttClient
        ? <MessageInputContainer>
            <MessageInput value={messageInput} placeholder='message' onChange={handleMessageChange} onKeyUp={handleKeyboardStroke}/>
            <MyButton onClick={handleMessageSend}>Send</MyButton>
          </MessageInputContainer>
        : null}
    </AsideSectionContainer>
  )
};

const mapStateToProps = (state) => ({
  messages: selectMessages(state),
  mqttClient: selectConnectionClient(state),
  roomId: selectRoomId(state),
  clientUsername: selectClientUsername(state)
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
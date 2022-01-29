import { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { AsideContainer, AsideSectionContainer, Message, MessageAuthor, MessageContent, MessageInput, MessageInputContainer, MessagesContainer, MessageSend } from '../styles/FightStyles'
import { BigText, MyButton } from '../styles/MultiUsageStyles';

const MqttTest = ({ messages, battleLog, mqttClient, roomId, clientUsername }) => {
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
    <AsideContainer>
      <AsideSectionContainer>
        <BigText>BattleLog</BigText>
        <MessagesContainer>
          {battleLog.map((message, index) => (
            <Message key={index}>
              {message.move} - {message.damage}
            </Message>)
          )}
        </MessagesContainer>
      </AsideSectionContainer>

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
        {mqttClient ? <MessageInputContainer>
          <MessageInput value={messageInput} placeholder='message' onChange={handleMessageChange} onKeyUp={handleKeyboardStroke}/>
          <MyButton onClick={handleMessageSend}>Send</MyButton>
        </MessageInputContainer>
        : null}
      </AsideSectionContainer>
    </AsideContainer>
  )
};

const mapStateToProps = (state) => ({
  messages: state.mqtt.messages,
  battleLog: state.mqtt.battleLog,
  mqttClient: state.mqtt.client,
  roomId: state.mqtt.roomId,
  clientUsername: state.fightClient.username
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(MqttTest);
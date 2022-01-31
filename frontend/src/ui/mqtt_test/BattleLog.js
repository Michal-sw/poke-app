import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { AsideSectionContainer, Message, MessageAuthor, MessageBoldText, MessagesContainer } from '../styles/FightStyles'
import { BigText, TextNoMargin } from '../styles/MultiUsageStyles';

const BattleLog = ({ battleLog }) => {
  const lastMessageRef = useRef(null);

  useEffect(() => {
    lastMessageRef.current.scrollIntoView({});
    lastMessageRef.current.style.height = '30px';
  }, [battleLog.length])

  return (
    <AsideSectionContainer>
    <BigText>BattleLog</BigText>
    <MessagesContainer>
      {battleLog.map((message, index) => (
        <Message key={index}>
          <MessageAuthor>{message.author}</MessageAuthor>
          <TextNoMargin>used {message.move}</TextNoMargin>
          <MessageBoldText>{message.message}</MessageBoldText>
        </Message>)
      )}
      <div ref={lastMessageRef}/>
    </MessagesContainer>
  </AsideSectionContainer>
  )
};

const mapStateToProps = (state) => ({
  battleLog: state.mqtt.battleLog,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(BattleLog);
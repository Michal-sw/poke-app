import { connect } from 'react-redux';
import { AsideContainer, AsideSectionContainer, Message, MessagesContainer } from '../styles/FightStyles'
import { BigText } from '../styles/MultiUsageStyles';
import Chat from './Chat';

const AsideMessages = ({ battleLog }) => {
  
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

      <Chat />
    </AsideContainer>
  )
};

const mapStateToProps = (state) => ({
  battleLog: state.mqtt.battleLog,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(AsideMessages);
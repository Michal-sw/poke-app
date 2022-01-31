import { connect } from 'react-redux';
import mqttActions from '../../ducks/mqtt_handler/actions'
import { BigText, MainListFlexContainer, NameLabel } from '../styles/MultiUsageStyles'
import { FightMainContainer } from '../styles/FightStyles'
import TopicConnect from './TopicConnect';
import BattleField from './BattleField';
import AsideMessages from './AsideMessages';

const FightMainView = ({ connectionClient, error }) => {

  return (
    <MainListFlexContainer>
      {
        connectionClient 
          ? <NameLabel>Connected</NameLabel>
          : <TopicConnect/>
      }
      {
        error 
          ? <BigText>{error}</BigText>
          : null
      }
      <FightMainContainer>
        <BattleField />
        <AsideMessages />
      </FightMainContainer>

    </ MainListFlexContainer>
  )
};

const mapStateToProps = (state) => ({
  connectionClient: state.mqtt.client,
  error: state.mqtt.err
});

const mapDispatchToProps = {
  connectionInit: mqttActions.connectionInit,
};

export default connect(mapStateToProps, mapDispatchToProps)(FightMainView);
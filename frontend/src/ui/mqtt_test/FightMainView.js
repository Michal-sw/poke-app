import { connect } from 'react-redux';
import mqttActions from '../../ducks/mqtt_handler/actions'
import { MainListFlexContainer, NameLabel } from '../styles/MultiUsageStyles'
import { FightMainContainer } from '../styles/FightStyles'
import TopicConnect from './TopicConnect';
import BattleField from './BattleField';
import AsideMessages from './AsideMessages';

const FightMainView = ({ connectionClient }) => {

  return (
    <MainListFlexContainer>
      {
        connectionClient 
        ? <NameLabel>Connected</NameLabel>
        : <TopicConnect/>
      }
      <FightMainContainer>
        <BattleField />
        <AsideMessages />
      </FightMainContainer>

    </ MainListFlexContainer>
  )
};

const mapStateToProps = (state) => ({
  connectionClient: state.mqtt.client
});

const mapDispatchToProps = {
  connectionInit: mqttActions.connectionInit,
};

export default connect(mapStateToProps, mapDispatchToProps)(FightMainView);
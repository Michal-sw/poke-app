import { connect } from 'react-redux';
import mqttActions from '../../ducks/mqtt_handler/actions'
import { BigText, MainListFlexContainer, NameLabel } from '../styles/MultiUsageStyles'
import { FightMainContainer } from '../styles/FightStyles'
import TopicConnect from './TopicConnect';
import BattleField from './BattleField';
import AsideMessages from './AsideMessages';
import { selectConnectionClient, selectConnectionError } from '../../ducks/mqtt_handler/selectors';

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
  connectionClient: selectConnectionClient(state),
  error: selectConnectionError(state)
});

const mapDispatchToProps = {
  connectionInit: mqttActions.connectionInit,
};

export default connect(mapStateToProps, mapDispatchToProps)(FightMainView);
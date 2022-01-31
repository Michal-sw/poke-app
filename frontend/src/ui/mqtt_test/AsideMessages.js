import { connect } from 'react-redux';
import { AsideContainer } from '../styles/FightStyles'
import Chat from './Chat';
import BattleLog from './BattleLog';

const AsideMessages = ({ }) => {
  
  return (
    <AsideContainer>
      <BattleLog/>
      <Chat />
    </AsideContainer>
  )
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(AsideMessages);
import { connect } from 'react-redux';
import mqttActions from '../../ducks/mqtt_handler/actions'
import PokemonAnimated from '../components/PokemonAnimated';
import { BattleContainer } from '../styles/FightStyles'
import FightMoves from './FightMoves';

const BattleField = ({ enemyPokemon, clientPokemon }) => {

  return (
    <BattleContainer>
      <FightMoves isEnemy/>
      {enemyPokemon.alias ? <PokemonAnimated isEnemy /> : null}
      {clientPokemon.alias ? <PokemonAnimated /> : null}
      <FightMoves/>
    </BattleContainer>
  )
};

const mapStateToProps = (state) => ({
  enemyPokemon: state.fightEnemy.pokemon,
  clientPokemon: state.fightClient.pokemon,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(BattleField);
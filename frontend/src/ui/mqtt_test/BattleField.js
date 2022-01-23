import { connect } from 'react-redux';
import mqttActions from '../../ducks/mqtt_handler/actions'
import PokemonAnimated from '../components/PokemonAnimated';
import { BattleContainer } from '../styles/FightStyles'
import FightMoves from './FightMoves';

const BattleField = ({ enemyPokemon, clientPokemon }) => {

  return (
    <BattleContainer>
      <FightMoves isEnemy/>
      {enemyPokemon.alias ? <PokemonAnimated isEnemy alias={enemyPokemon.alias} /> : null}
      {clientPokemon.alias ? <PokemonAnimated alias={clientPokemon.alias}/> : null}
      <FightMoves/>
    </BattleContainer>
  )
};

const mapStateToProps = (state) => ({
  enemyPokemon: state.mqtt.enemyPokemon,
  clientPokemon: state.mqtt.clientPokemon,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(BattleField);
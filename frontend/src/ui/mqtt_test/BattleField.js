import { connect } from 'react-redux';
import PokemonAnimated from '../components/PokemonAnimated';
import { BattleContainer } from '../styles/FightStyles'
import FightMoves from './FightMoves';
import WinnerMessage from './WinnerMessage';

const BattleField = ({ enemyPokemon, clientPokemon, winner }) => {

  return (
    <BattleContainer>
      {enemyPokemon.alias ? <PokemonAnimated isEnemy /> : null}
      {winner ? <WinnerMessage winner={winner} /> : null}
      {clientPokemon.alias ? <PokemonAnimated /> : null}
      <FightMoves/>
    </BattleContainer>
  )
};

const mapStateToProps = (state) => ({
  enemyPokemon: state.fightEnemy.pokemon,
  clientPokemon: state.fightClient.pokemon,
  winner: state.mqtt.winner
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(BattleField);
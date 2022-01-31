import { connect } from 'react-redux';
import { selectClientPokemon, selectEnemyPokemon, selectWinner } from '../../ducks/mqtt_handler/selectors';
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
  enemyPokemon: selectEnemyPokemon(state),
  clientPokemon: selectClientPokemon(state),
  winner: selectWinner(state)
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(BattleField);
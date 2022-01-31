import { connect } from 'react-redux';
import { selectClientPokemon, selectEnemyPokemon } from '../../ducks/mqtt_handler/selectors';
import HpBar from '../mqtt_test/HpBar';
import PokemonHoverDetail from '../mqtt_test/PokemonHoverDetail';
import { PokemonAnimatedContainer, SpriteAnimated } from '../styles/FightStyles'

const PokemonAnimated = ({ pokemon, isEnemy }) => {
  const resourceUrl = isEnemy 
    ? `https://play.pokemonshowdown.com/sprites/ani/${pokemon.alias}.gif`
    : `https://play.pokemonshowdown.com/sprites/ani-back/${pokemon.alias}.gif`
  return (
    <PokemonAnimatedContainer isEnemy={isEnemy}>
      <HpBar isEnemy={isEnemy} fullHp={pokemon?.stats.hp} currHp={pokemon?.fightHp}/>
      <PokemonHoverDetail isEnemy={isEnemy}/>
      <SpriteAnimated>
        <img
            src={resourceUrl}
            alt={'pokemonAnimated'}
            style={{
              imageRendering: 'crisp-edges',
              scale: isEnemy ? '1.2' : '1.8',
              maxHeight: '125px',
              marginBottom: isEnemy ? '0px' : '35px',
            }}
        />
      </SpriteAnimated>
    </PokemonAnimatedContainer>
  )
}

const mapStateToProps = (state, props) => ({
  isEnemy: props.isEnemy ? true : false,
  pokemon: props.isEnemy ? selectEnemyPokemon(state) : selectClientPokemon(state),
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonAnimated);
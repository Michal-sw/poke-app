import { connect } from 'react-redux';
import HpBar from '../mqtt_test/HpBar';
import PokemonHoverDetail from '../mqtt_test/PokemonHoverDetail';
import { PokemonAnimatedContainer, SpriteAnimated } from '../styles/FightStyles'

const PokemonAnimated = ({ pokemon, isEnemy }) => {

  const resourceUrl = isEnemy 
    ? `https://play.pokemonshowdown.com/sprites/ani/${pokemon.alias}.gif`
    : `https://play.pokemonshowdown.com/sprites/ani-back/${pokemon.alias}.gif`
console.log(pokemon)
  return (
    <div style={{ alignSelf: isEnemy ? 'flex-end' : 'flex-start' }}>
      <PokemonAnimatedContainer>
        <HpBar/>
        <PokemonHoverDetail isEnemy={isEnemy}/>
        <SpriteAnimated>
          <img
              src={resourceUrl}
              alt={'pokemonAnimated'}
              style={{
                imageRendering: 'crisp-edges',
                scale: isEnemy ? '1.2' : '1.8',
              }}
          />
        </SpriteAnimated>
      </PokemonAnimatedContainer>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  isEnemy: props.isEnemy ? true : false,
  pokemon: props.isEnemy ? state.fightEnemy.pokemon : state.fightClient.pokemon,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonAnimated);
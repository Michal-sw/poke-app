import { connect } from 'react-redux';
import PokemonHoverDetail from '../mqtt_test/PokemonHoverDetail';
import { PokemonAnimatedContainer, SpriteAnimated } from '../styles/FightStyles'

const PokemonAnimated = ({ pokemon, isEnemy }) => {
  const resourceUrl = isEnemy 
    ? `https://play.pokemonshowdown.com/sprites/ani/${pokemon.alias}.gif`
    : `https://play.pokemonshowdown.com/sprites/ani-back/${pokemon.alias}.gif`

  return (
    <div style={{ alignSelf: isEnemy ? 'flex-end' : 'flex-start' }}>
      <PokemonAnimatedContainer>
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
        {/* <GrassTileContainer>
        <img
            style={{ imageRendering: 'crisp-edges' }}
            src={require('../../assets/images/grass_tile.png')}
            alt="Grass-tile"
            height={isEnemy ? '70' : '110'}
            width={isEnemy ? '130' : '180'}
        />
        </GrassTileContainer> */}
      </PokemonAnimatedContainer>
    </div>
  )
}

// const GrassTileContainer = styled.div`
//   z-index: 0;
//   position: relative;
// `

const mapStateToProps = (state, props) => ({
  isEnemy: props.isEnemy ? true : false,
  pokemon: props.isEnemy ? state.mqtt.enemyPokemon : state.mqtt.clientPokemon,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonAnimated);
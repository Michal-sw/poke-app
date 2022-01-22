import styled from 'styled-components'
const PokemonAnimated = ({ alias, side }) => {
  return (
    <div>
      <SpriteOnTile>
        <img
            src={`https://play.pokemonshowdown.com/sprites/ani/${alias}.gif`}
            alt={'pokemonAnimated'}
            style={{ imageRendering: 'crisp-edges', scale: '1.7' }}
        />
      </SpriteOnTile>
      <GrassTileContainer>
      <img
          style={{ imageRendering: 'crisp-edges' }}
          src={require('../../assets/images/grass_tile.png')}
          alt="Grass-tile"
          height="110"
          width="180"
      />
      </GrassTileContainer>

    </div>
  )
}

const GrassTileContainer = styled.div`
  z-index: -1;
  position: relative;
`
const SpriteOnTile = styled.div`
  margin-bottom: -20px;
  position: relative;
`
export default PokemonAnimated
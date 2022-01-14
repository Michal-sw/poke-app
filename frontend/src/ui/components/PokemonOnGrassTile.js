import styled from 'styled-components'
import { PokemonSprite } from '../styles/PokemonStyles'

const PokemonOnGrassTile = ({ name, num }) => {
  return (
    <div>
      <GrassTileContainer>
        <img
            style={{ imageRendering: 'crisp-edges' }}
            src={require('../../assets/images/grass_tile.png')}
            alt="Grass-tile"
            height="150"
            width="250"
        />
      </GrassTileContainer>
      <SpriteOnTile>
        {/* On click niech zmienia mu strone w ktora patrzy, routey moga byc w stacie */}
        <PokemonSprite alt={name} src={num ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png` : null}/>
      </SpriteOnTile>
    </div>
    )
}

const GrassTileContainer = styled.div`
  z-index: -1;
  position: relative;
  top: 130px;s
`
const SpriteOnTile = styled.div`
  position: relative;
  bottom:120px;
`

export default PokemonOnGrassTile;
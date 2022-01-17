import { useState } from 'react'
import styled from 'styled-components'
import { PokemonSprite } from '../styles/PokemonStyles'

const PokemonOnGrassTile = ({ name, num }) => {
  const [showFrontSide, setShowFrontSide] = useState(true);
  const handleOrientationChange = () => setShowFrontSide(!showFrontSide);

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

      {showFrontSide 
        ? <PokemonSprite onClick={handleOrientationChange} alt={name} src={num ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png` : null}/>
        : <PokemonSprite onClick={handleOrientationChange} alt={name} src={num ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${num}.png` : null}/>
      }
      </SpriteOnTile>
    </div>
    )
}

const GrassTileContainer = styled.div`
  z-index: -1;
  position: relative;
  top: 130px;
`
const SpriteOnTile = styled.div`
  position: relative;
  bottom:120px;
`

export default PokemonOnGrassTile;
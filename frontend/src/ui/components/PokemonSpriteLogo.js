import { PokemonLogoImg } from '../styles/MultiUsageStyles'

const PokemonSpriteLogo = ({ name }) => {
  return (
    <PokemonLogoImg
      src={`https://raw.githubusercontent.com/msikma/pokesprite/51ac16746cf72466182c5f265da00ae55c504956/pokemon-gen8/regular/${name.replace(/[^A-Z0-9- ]+/ig, '').replace(/ /g,"-").toLowerCase()}.png`}
      alt={`${name} logo`}
      />
  )
};

export default PokemonSpriteLogo;
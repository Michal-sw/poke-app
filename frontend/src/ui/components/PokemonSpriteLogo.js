import styled from "styled-components";

const PokemonSpriteLogo = ({ name }) => {
  return (
    <PokemonLogoImg
      src={`https://raw.githubusercontent.com/msikma/pokesprite/51ac16746cf72466182c5f265da00ae55c504956/pokemon-gen8/regular/${name.replace(/[^A-Z0-9- ]+/ig, '').replace(/ /g,"-").toLowerCase()}.png`}
      alt={`${name} logo`}
      />
  )
};

const PokemonLogoImg = styled.img`
  width: 80px;
  height: 59px;
  object-fit: cover;
  object-position: 0 -16px;
  border-radius: 20px;
`;

export default PokemonSpriteLogo;
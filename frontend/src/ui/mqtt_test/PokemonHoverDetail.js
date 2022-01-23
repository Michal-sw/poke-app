import { connect } from 'react-redux';
import { FightHoverType, FightHoverTypeContainer, PokemonHoverDetailContainer } from '../styles/FightStyles'
import { BigText } from '../styles/MultiUsageStyles';


const PokemonHoverDetail = ({ pokemon, typesSelectMap }) => {
  return (
    <PokemonHoverDetailContainer>
      <FightHoverTypeContainer>
        {pokemon.types.map(type => (
          <FightHoverType color={typesSelectMap[type].color}>{typesSelectMap[type].label}</FightHoverType>
        ))}
      </FightHoverTypeContainer>
      <BigText>{pokemon.name}</BigText>
    </PokemonHoverDetailContainer>
  )
}

const mapStateToProps = (state, props) => ({
  isEnemy: props.isEnemy,
  pokemon: props.isEnemy ? state.mqtt.enemyPokemon : state.mqtt.clientPokemon,
  typesSelectMap: state.types.selectOptionsMap
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonHoverDetail);
import { connect } from 'react-redux';
import { TypeStamp, FightHoverTypeContainer, PokemonHoverDetailContainer } from '../styles/FightStyles'
import { BigText } from '../styles/MultiUsageStyles';


const PokemonHoverDetail = ({ pokemon, typesSelectMap }) => {
  return (
    <PokemonHoverDetailContainer>
      <FightHoverTypeContainer>
        {pokemon.types.map(type => (
          <TypeStamp key={type} color={typesSelectMap[type].color}>{typesSelectMap[type].label}</TypeStamp>
        ))}
      </FightHoverTypeContainer>
      <BigText>{pokemon.name}</BigText>
    </PokemonHoverDetailContainer>
  )
}

const mapStateToProps = (state, props) => ({
  isEnemy: props.isEnemy,
  pokemon: props.isEnemy ? state.fightEnemy.pokemon : state.fightClient.pokemon,
  typesSelectMap: state.types.selectOptionsMap
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonHoverDetail);
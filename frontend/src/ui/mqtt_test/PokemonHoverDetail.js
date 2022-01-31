import { connect } from 'react-redux';
import { selectClientPokemon, selectEnemyPokemon } from '../../ducks/mqtt_handler/selectors';
import { selectTypesSelectOptionsMap } from '../../ducks/types/selectors';
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
  pokemon: props.isEnemy ? selectEnemyPokemon(state) : selectClientPokemon(state),
  typesSelectMap: selectTypesSelectOptionsMap(state)
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonHoverDetail);
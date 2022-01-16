import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectPokemon } from "../../ducks/pokemons/selectors";
import { selectTypesSelectOptionsMap } from "../../ducks/types/selectors";
import TypeLogo from "../components/TypeLogo";
import { ItemListContainer, MyLink } from "../styles/MultiUsageStyles";

const PokemonTypeLogos = ({ pokemon, typesMap }) => {
  return (
    <ItemListContainer>
      {pokemon.types ? pokemon.types.map(type => (
        <MyLink  key={type} to={`/types/${typesMap[type]?.value}`}>
          <ItemListContainer>
            <TypeLogo type={typesMap[type]?.label.toLowerCase()}/>
          </ItemListContainer>
        </MyLink>
      )) : null}
    </ItemListContainer>
  )
}

const mapStateToProps = (state, props) => ({
  pokemon: selectPokemon(state, props),
  typesMap: selectTypesSelectOptionsMap(state),
});

const mapDispatchToProps = {
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonTypeLogos));
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectMovesQuery } from "../../ducks/moves/selectors";
import { selectPokemonsQuery } from '../../ducks/pokemons/selectors';
import { NavContainer, NavLinkContainer, NavName } from "../styles/MultiUsageStyles";

const Navbar = ({ pokemonQuery, moveQuery }) => {
  return (
    <NavContainer>
      <NavLinkContainer>
        <Link to={`/pokemons?${pokemonQuery.toString()}`}>
          <NavName>Pokemons</NavName>
        </Link>
      </NavLinkContainer>
      <NavLinkContainer>
        <Link to={'/types'}>
          <NavName>Types</NavName>
        </Link>
      </NavLinkContainer>
      <NavLinkContainer>
        <Link to={`/moves?${moveQuery.toString()}`}>
          <NavName>Moves</NavName>
        </Link>
      </NavLinkContainer>
    </NavContainer>
  )
};

const mapStateToProps = (state) => ({
  pokemonQuery: selectPokemonsQuery(state),
  moveQuery: selectMovesQuery(state)
});

export default connect(mapStateToProps, null)(Navbar);
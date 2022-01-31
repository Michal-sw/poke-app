import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectMovesQuery } from "../../ducks/moves/selectors";
import { selectPokemonsQuery } from '../../ducks/pokemons/selectors';
import { NavContainer, NavLink, NavName } from "../styles/MultiUsageStyles";

const Navbar = ({ pokemonQuery, moveQuery }) => {
  return (
    <NavContainer>
      <NavLink>
        <Link to={`/pokemons?${pokemonQuery.toString()}`}>
          <NavName>Pokemons</NavName>
        </Link>
      </NavLink>
      <NavLink>
        <Link to={'/types'}>
          <NavName>Types</NavName>
        </Link>
      </NavLink>
      <NavLink>
        <Link to={`/moves?${moveQuery.toString()}`}>
          <NavName>Moves</NavName>
        </Link>
      </NavLink>
    </NavContainer>
  )
};

const mapStateToProps = (state) => ({
  pokemonQuery: selectPokemonsQuery(state),
  moveQuery: selectMovesQuery(state)
});

export default connect(mapStateToProps, null)(Navbar);
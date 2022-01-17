import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { selectMovesQuery } from "../../ducks/moves/selectors";
import { selectPokemonsQuery } from '../../ducks/pokemons/selectors';

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

const NavContainer = styled.nav`
  display: flex;
  flex-display: row;
  flex-wrap: wrap;
  background-color: whitesmoke;
  box-shadow: 1px 1px 0.5em grey;
  border-radius: 30px;
  width: 80%;
  align-items: center;
  justify-self:center;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 15px;
  padding: 10px 5px 10px 5px;
  min-width: 300px;
`;

const NavLink = styled.div`
  background-image: url("https://raw.githubusercontent.com/itsjavi/pokemon-assets/master/assets/svg/pokeball-banner.svg");
  width: 282px;
  margin-right: 5px;
  transition: all 0.08s linear;

  &:hover {
    box-shadow: 0.5px 0.5px 0.5em #838383;
    border-radius: 100px;
  }
  > a {
    text-decoration: none;
  }
`;

const NavName = styled.p`
  color: Black;
  font-size: 2em;
  margin-top:11px;
  margin-bottom:11px;
`;

const mapStateToProps = (state) => ({
  pokemonQuery: selectPokemonsQuery(state),
  moveQuery: selectMovesQuery(state)
});

export default connect(mapStateToProps, null)(Navbar);
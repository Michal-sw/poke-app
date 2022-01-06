import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { PokemonCard, PokemonCardHead, PokemonCardName, PokemonSprite} from '../styles/PokemonStyles';
import Pokeball from '../components/Pokeball';
import PokeSearch from '../components/PokeSearch';
import { selectPokemonsLoading, selectPokemons, selectPokemonsQuery, selectPokemonsQueryPage, selectPokemonsMaxPage } from '../../ducks/pokemons/selectors';
import { getPokemons } from '../../ducks/pokemons/operations';
import { PageButton, PageButtonContainer, SearchContainer, SearchInput } from '../styles/MultiUsageStyles';
import actions from '../../ducks/pokemons/actions';
import Loading from '../components/Loading';

const PokemonList = ({ pokemons, loading, getPokemons, query, page, changeQueryAction, maxPage }, props) => {
  const [searchInput, setSearchInput] = useState('');
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const url = new URLSearchParams(location.search);
    changeQueryAction(url)
    getPokemons(url.toString());
  }, [location.search]);

  const pageDown = () => {
    const newUrl = query;
    newUrl.set('page', parseInt(page) - 1);
    history.push(`/pokemons?${newUrl.toString()}`)
  };
  const pageUp = () => {
    const newUrl = query;
    page ? newUrl.set('page', parseInt(page) + 1) : newUrl.set('page', 2);
    history.push(`/pokemons?${newUrl.toString()}`)
  };
  const changeSearchInput = (input) => {
    setSearchInput(input.target.value);
  };
  const handleSearch = () => {
    const newUrl = query;
    newUrl.set('name', searchInput);
    newUrl.set('page', 1);
    history.push(`/pokemons?${newUrl.toString()}`)
  };

  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', margin:'0px 50px 0px 50px'}} >
      <Pokeball />
      <SearchContainer>
        <SearchInput onChange={changeSearchInput}/>
        <PokeSearch onClick={handleSearch}/>
      </SearchContainer>
      <PageButtonContainer>
        { page > 1 ? <PageButton onClick={pageDown}>Previous page</PageButton> : null }
        { page >= maxPage ? null : <PageButton onClick={pageUp}>Next page</PageButton> }
      </PageButtonContainer>
      <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
        { loading ? <Loading/> :
          pokemons.map(pokemon => {
            return (
              <PokemonCard key={pokemon.num}>
                <PokemonCardHead>
                  <PokemonCardName>{pokemon.name}</PokemonCardName>
                </PokemonCardHead>
                <PokemonSprite alt={pokemon.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.num}.png`}/>
              </PokemonCard>
            )
          })
        }
      </div>
    </div>
  );
}


const mapStateToProps = (state) => ({
  pokemons: selectPokemons(state),
  loading: selectPokemonsLoading(state),

  query: selectPokemonsQuery(state),
  page: selectPokemonsQueryPage(state),
  maxPage: selectPokemonsMaxPage(state),
});

const mapDispatchToProps = {
  getPokemons,
  changeQueryAction: actions.changeQueryAction
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
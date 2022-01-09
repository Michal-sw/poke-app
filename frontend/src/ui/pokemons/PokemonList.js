import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';

import { selectPokemonsLoading, selectPokemons, selectPokemonsQuery, selectPokemonsQueryPage, selectPokemonsMaxPage } from '../../ducks/pokemons/selectors';
import { selectTypesSelectOptions, selectTypesLoading } from '../../ducks/types/selectors'

import { getPokemons } from '../../ducks/pokemons/operations';
import actions from '../../ducks/pokemons/actions';

import { getTypes } from '../../ducks/types/operations'

import Loading from '../components/Loading';
import Pokeball from '../components/Pokeball';
import PokeSearch from '../components/PokeSearch';
import TypeSelect from '../components/TypeSelect';
import SortSelect from '../components/SortSelect';

import { PageButton, PageButtonContainer, PageCounter, SearchContainer, SearchInput } from '../styles/MultiUsageStyles';
import { PokemonCard, PokemonCardHead, PokemonCardName, PokemonSprite} from '../styles/PokemonStyles';


const PokemonList = ({ pokemons, loading, getPokemons, query, page, changeQueryAction, maxPage, typesSelectOptions, getTypes }, props) => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([])
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (typesSelectOptions.length === 0) {
      getTypes();
    }
  }, [])

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
  const changeSelectedSort = (input) => {
    setSelectedSort(input.value);
  };
  const changeSelectedTypes = (input) => {
    setSelectedTypes(input.map(option => option.value))
  }
  const handleSearch = () => {
    const newUrl = query;
    newUrl.set('page', 1);
    
    searchInput !== '' 
      ? newUrl.set('name', searchInput)
      : newUrl.delete('name');
    selectedTypes.length > 0
      ? newUrl.set('types', selectedTypes.reduce((prev, curr) => `${prev},${curr}`))
      : newUrl.delete('types');
    selectedSort !== ''
      ? newUrl.set('sort', selectedSort)
      : newUrl.delete('sort');

    history.push(`/pokemons?${newUrl.toString()}`)
  };

  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', margin:'0px 50px 0px 50px'}} >
      <Pokeball />
      <SearchContainer>
        <TypeSelect typesSelectOptions={typesSelectOptions} onChange={changeSelectedTypes}/>
        <SearchInput onChange={changeSearchInput} placeholder='Name...'/>
        <SortSelect onChange={changeSelectedSort}/>
        <PokeSearch onClick={handleSearch}/>
      </SearchContainer>
      <PageButtonContainer>
        { page > 1 ? <PageButton onClick={pageDown}>Previous page</PageButton> : null }
        { page >= maxPage ? null : <PageButton onClick={pageUp}>Next page</PageButton> }
      </PageButtonContainer>
      <PageCounter>{page} z {maxPage}</PageCounter>
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
  page: selectPokemonsQueryPage(state) || 1,
  maxPage: selectPokemonsMaxPage(state),

  typesSelectOptions: selectTypesSelectOptions(state)
});

const mapDispatchToProps = {
  getPokemons,
  changeQueryAction: actions.changeQueryAction,
  getTypes,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
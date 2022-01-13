import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import { selectPokemonsLoading, selectPokemons, selectPokemonsQuery, selectPokemonsQueryPage, selectPokemonsMaxPage } from '../../ducks/pokemons/selectors';
import { selectTypesSelectOptions, selectTypesLoading, selectTypesSelectOptionsMap } from '../../ducks/types/selectors'

import { getPokemons } from '../../ducks/pokemons/operations';
import actions from '../../ducks/pokemons/actions';

import { getTypes } from '../../ducks/types/operations'

import Loading from '../components/Loading';
import Pokeball from '../components/Pokeball';
import PokeSearch from '../components/PokeSearch';
import TypeSelect from '../components/TypeSelect';
import SortSelect from '../components/SortSelect';

import { MainListFlexContainer, ItemListContainer, MyLink, PageButton, PageButtonContainer, PageCounter, SearchContainer, SearchInput } from '../styles/MultiUsageStyles';
import { PokemonCard, PokemonCardHead, PokemonCardName, PokemonSprite} from '../styles/PokemonStyles';


const PokemonList = ({ pokemons, loading, getPokemons, query, page, changeQueryAction, maxPage, typesSelectOptions, typesSelectOptionsMap, getTypes }, props) => {
  const location = useLocation();
  const history = useHistory();

  const [searchInput, setSearchInput] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);


  const changeSearchInput = (input) => {
    setSearchInput(input.target.value);
  };
  const changeSelectedSort = (input) => {
    setSelectedSort(input.value);
  };
  const changeSelectedTypes = (input) => {
    setSelectedTypes(input)
  };

  useEffect(() => {
    if (typesSelectOptions.length === 0) {
      getTypes();
    }
  }, []);

  useEffect(() => {
    const url = new URLSearchParams(location.search);
    url.get('name') ? setSearchInput(url.get('name')) : setSearchInput('');
    url.get('sort') ? setSelectedSort(url.get('sort')) : setSelectedSort('');
    url.get('types') ? setSelectedTypes(url.get('types').split(',').map(type => typesSelectOptionsMap[type])) : setSelectedTypes([]);
    // 
    if (query.toString() !== url.toString() || pokemons.length === 0) {
      changeQueryAction(url)
      getPokemons(url.toString());
    }
  }, [location.search, typesSelectOptions]);

  const pageDown = () => {
    const newUrl = new URLSearchParams(query.toString());
    newUrl.set('page', parseInt(page) - 1);
    history.push(`/pokemons?${newUrl.toString()}`)
  };

  const pageUp = () => {
    const newUrl = new URLSearchParams(query.toString());
    newUrl.set('page', parseInt(page) + 1);
    history.push(`/pokemons?${newUrl.toString()}`)
  };

  const handleSearch = () => {
    const newUrl = new URLSearchParams(query.toString());
    newUrl.set('page', 1);
    searchInput !== '' 
      ? newUrl.set('name', searchInput)
      : newUrl.delete('name');
    selectedTypes.length > 0
      ? newUrl.set('types', selectedTypes.reduce((prev, curr, index) => index === 0 ? `${curr.value}` : `${prev},${curr.value}` , ''))
      : newUrl.delete('types');
    selectedSort !== ''
      ? newUrl.set('sort', selectedSort)
      : newUrl.delete('sort');
    history.push(`/pokemons?${newUrl.toString()}`)
  };

  return (
    <MainListFlexContainer >
      <Pokeball />
      <SearchContainer>
        <TypeSelect typesSelectOptions={typesSelectOptions} onChange={changeSelectedTypes} value={selectedTypes}/>
        <SearchInput onChange={changeSearchInput} placeholder='Name...' value={searchInput} />
        <SortSelect onChange={changeSelectedSort} value={selectedSort} />
        <PokeSearch onClick={handleSearch}/>
      </SearchContainer>

      <PageButtonContainer>
        { page > 1 ? <PageButton onClick={pageDown}>Previous page</PageButton> : null }
        { page >= maxPage ? null : <PageButton onClick={pageUp}>Next page</PageButton> }
      </PageButtonContainer>
      <PageCounter>{page} z {maxPage}</PageCounter>

      <ItemListContainer >
        { loading ? <Loading/> :
          pokemons.map(pokemon => {
            return (
              <MyLink to={`pokemons/${pokemon.alias}`} key={pokemon.num}>
                <PokemonCard>
                  <PokemonCardHead>
                    <PokemonCardName>{pokemon.name}</PokemonCardName>
                  </PokemonCardHead>
                  <PokemonSprite alt={pokemon.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.num}.png`}/>
                </PokemonCard>
              </MyLink>
            )
          })
        }
      </ItemListContainer>

    </MainListFlexContainer>
  );
}


const mapStateToProps = (state) => ({
  pokemons: selectPokemons(state),
  loading: selectPokemonsLoading(state),
  query: selectPokemonsQuery(state),
  page: selectPokemonsQueryPage(state),
  maxPage: selectPokemonsMaxPage(state),

  typesSelectOptions: selectTypesSelectOptions(state),
  typesSelectOptionsMap: selectTypesSelectOptionsMap(state),
});

const mapDispatchToProps = {
  getPokemons,
  changeQueryAction: actions.changeQueryAction,
  getTypes,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
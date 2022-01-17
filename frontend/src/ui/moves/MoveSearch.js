import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import { selectMovesQuery } from '../../ducks/moves/selectors';
import { selectTypesSelectOptions, selectTypesSelectOptionsMap } from '../../ducks/types/selectors'

import { getTypes } from '../../ducks/types/operations'

import PokeSearch from '../components/PokeSearch';
import TypeSelect from '../components/TypeSelect';
import SortSelect from '../components/SortSelect';

import { SearchContainer, SearchInput } from '../styles/MultiUsageStyles';


const MoveSearch = ({ query, typesSelectOptions, typesSelectOptionsMap, getTypes }, props) => {
  const location = useLocation();
  const history = useHistory();

  const [searchInput, setSearchInput] = useState('');
  const [powerInput, setPowerInput] = useState(0);
  const [selectedSort, setSelectedSort] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);


  const changePowerInput = (input) => {
    setPowerInput(input.target.value)
  }
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
    url.get('power') ? setPowerInput(url.get('power')) : setPowerInput(0);
    url.get('types') ? setSelectedTypes(url.get('types').split(',').map(type => typesSelectOptionsMap[type])) : setSelectedTypes([]);
  }, [location.search, typesSelectOptions]);

  const handleSearch = () => {
    const newUrl = new URLSearchParams(query.toString());
    newUrl.set('page', 1);
    searchInput !== '' 
      ? newUrl.set('name', searchInput)
      : newUrl.delete('name');
    powerInput !== 0 
      ? newUrl.set('power', powerInput)
      : newUrl.delete('power');
    selectedTypes.length > 0
      ? newUrl.set('types', selectedTypes.reduce((prev, curr, index) => index === 0 ? `${curr.value}` : `${prev},${curr.value}` , ''))
      : newUrl.delete('types');
    selectedSort !== ''
      ? newUrl.set('sort', selectedSort)
      : newUrl.delete('sort');
    history.push(`/moves?${newUrl.toString()}`)
  };

  return (
      <SearchContainer>
        <TypeSelect typesSelectOptions={typesSelectOptions} onChange={changeSelectedTypes} value={selectedTypes}/>
        <SearchInput onChange={changeSearchInput} placeholder='Name...' value={searchInput} />
        <SearchInput onChange={changePowerInput} placeholder='Power...' value={powerInput} type='number' max={250} min={0} width='100px'/>
        <SortSelect onChange={changeSelectedSort} value={selectedSort} />
        <PokeSearch onClick={handleSearch}/>
      </SearchContainer>
  );
}


const mapStateToProps = (state) => ({
  query: selectMovesQuery(state),
  typesSelectOptions: selectTypesSelectOptions(state),
  typesSelectOptionsMap: selectTypesSelectOptionsMap(state),
});

const mapDispatchToProps = {
  getTypes,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoveSearch);
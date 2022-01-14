import { useEffect } from 'react';
import { connect } from 'react-redux';

import { selectTypesSelectOptions } from '../../ducks/types/selectors'

import { getTypes } from '../../ducks/types/operations'

import PokemonList from './PokemonList';
import Pokeball from '../components/Pokeball';
import PokemonSearch from './PokemonSearch';
import PokemonPageChanger from './PokemonPageChanger';

import { MainListFlexContainer } from '../styles/MultiUsageStyles';


const PokemonMasterView = ({ typesSelectOptions, getTypes }, props) => {

  useEffect(() => {
    if (typesSelectOptions.length === 0) {
      getTypes();
    }
  }, []);

  return (
    <MainListFlexContainer >
      <Pokeball />

      <PokemonSearch />

      <PokemonPageChanger />
      <PokemonList />

    </MainListFlexContainer>
  );
}

const mapStateToProps = (state) => ({
  typesSelectOptions: selectTypesSelectOptions(state),
});

const mapDispatchToProps = {
  getTypes
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonMasterView);
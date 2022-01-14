import { connect } from 'react-redux';

import PokemonList from './PokemonList';
import Pokeball from '../components/Pokeball';
import PokemonSearch from './PokemonSearch';
import PokemonPageChanger from './PokemonPageChanger';

import { MainListFlexContainer } from '../styles/MultiUsageStyles';


const PokemonMasterView = ({ }, props) => {

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
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonMasterView);
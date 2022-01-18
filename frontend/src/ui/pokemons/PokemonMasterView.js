import { connect } from 'react-redux';

import PokemonList from './PokemonList';
import Pokeball from '../components/Pokeball';
import PokemonSearch from './PokemonSearch';
import PokemonPageChanger from './PokemonPageChanger';

import { MainListFlexContainer, MyButton, MyLink } from '../styles/MultiUsageStyles';


const PokemonMasterView = ({ }, props) => {

  return (
    <MainListFlexContainer >
      <Pokeball />
      <PokemonSearch />
      <PokemonPageChanger />
      <PokemonList />
      <PokemonPageChanger />
      <MyLink to={'pokemons/add'}>
        <MyButton>Add Pokemon</MyButton>
      </MyLink>
    </MainListFlexContainer>
  );
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonMasterView);
import { connect } from 'react-redux';

import { selectPokemonsLoading, selectPokemons, selectPokemonsQuery } from '../../ducks/pokemons/selectors';

import { getPokemons } from '../../ducks/pokemons/operations';

import Loading from '../components/Loading';

import actions from '../../ducks/pokemons/actions';

import { ItemListContainer, MyLink } from '../styles/MultiUsageStyles';
import { PokemonCard, PokemonCardHead, PokemonCardName, PokemonSprite} from '../styles/PokemonStyles';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const PokemonList = ({ pokemons, loading, query, changeQueryAction, getPokemons }, props) => {
  const location = useLocation();

  useEffect(() => {
    const url = new URLSearchParams(location.search);

    if (query.toString() !== url.toString() || pokemons.length === 0) {
      changeQueryAction(url)
      getPokemons(url.toString());
    }
  }, [location.search]);

  
  return (
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
  );
}


const mapStateToProps = (state) => ({
  pokemons: selectPokemons(state),
  loading: selectPokemonsLoading(state),
  query: selectPokemonsQuery(state)
});

const mapDispatchToProps = {
  getPokemons,
  changeQueryAction: actions.changeQueryAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
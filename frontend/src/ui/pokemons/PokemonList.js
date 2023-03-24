import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectPokemonsLoading, selectPokemons, selectPokemonsQuery } from '../../ducks/pokemons/selectors';
import { getPokemons } from '../../ducks/pokemons/operations';
import actions from '../../ducks/pokemons/actions';

import Loading from '../components/Loading';

import { PokemonCard, PokemonCardHead, PokemonSprite} from '../styles/PokemonStyles';
import { BigText, ItemListContainer, MyLink, NameLabel } from '../styles/MultiUsageStyles';

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
        pokemons.length ? 
          pokemons.map(pokemon => {
            return (
              <MyLink to={`pokemons/${pokemon.alias}`} key={pokemon.num}>
                <PokemonCard>
                  <PokemonCardHead>
                    <NameLabel>{pokemon.name}</NameLabel>
                  </PokemonCardHead>
                  <PokemonSprite alt={pokemon.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.num}.png`}/>
                </PokemonCard>
              </MyLink>
            )
          })
        : <>
            <BigText>If you do not see any pokemons, please visit</BigText>
            <BigText>
              <a href="https://130.61.177.18:3000" target='_blank'>https://130.61.177.18:3000</a>
              and mark the website certificate as trusted.
            </BigText>
          </>
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
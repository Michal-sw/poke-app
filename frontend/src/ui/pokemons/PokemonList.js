import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { PokemonCard, PokemonCardHead, PokemonCardName, PokemonSprite} from '../styles/PokemonStyles';

import Pokeball from '../components/Pokeball';

import { selectPokemonsLoading, selectPokemons } from '../../ducks/pokemons/selectors'
import { getPokemons } from '../../ducks/pokemons/operations'
import { PageButton, PageButtonContainer, SearchContainer, SearchInput } from '../styles/MultiUsageStyles';
import PokeSearch from '../components/PokeSearch';

const PokemonList = ({ pokemons, loading ,getPokemons }, props) => {
  const [page, setPage] = useState(new URLSearchParams(useLocation().search).get('page'));

  const history = useHistory();

  useEffect(() => {
    getPokemons(page)
  }, [page])

  const pageDown = () => {
    setPage(parseInt(page) - 1)
    history.push({
      pathname: '/pokemons',
      search: `?page=${parseInt(page) - 1}`
    })
  }
  const pageUp = () => {
    if (page === null) {
      setPage(2)
      history.push({
        pathname: '/pokemons',
        search: `?page=${2}`
      })
    } else {
      setPage(parseInt(page) + 1)
      history.push({
        pathname: '/pokemons',
        search: `?page=${parseInt(page) + 1}`
      })
    }
  };

  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', margin:'0px 50px 0px 50px'}} >
      <Pokeball />
      <SearchContainer>
        <SearchInput/>
        <PokeSearch/>
      </SearchContainer>
      <PageButtonContainer>
        { page > 1 ? <PageButton onClick={pageDown}>Previous page</PageButton> : null}
        <PageButton onClick={pageUp}>Next page</PageButton>
      </PageButtonContainer>
      <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
        {
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
  )
}


const mapStateToProps = (state) => ({
  pokemons: selectPokemons(state),
  loading: selectPokemonsLoading(state),
});

const mapDispatchToProps = {
  getPokemons
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
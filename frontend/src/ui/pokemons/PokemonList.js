import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { PokemonCard, PokemonCardHead, PokemonCardName, PokemonSprite} from '../styles/Pokemon/PokemonStyles';

import Pokeball from '../components/Pokeball';

import { selectPokemonsLoading, selectPokemons } from '../../ducks/pokemons/selectors'
import { getPokemons } from '../../ducks/pokemons/operations'

const PokemonList = ({ pokemons, loading ,getPokemons }, props) => {
  const [page, setPage] = useState(new URLSearchParams(useLocation().search).get('page'));

  useEffect(() => {
    getPokemons(page)
  }, [page])

  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', margin:'0px 50px 0px 50px'}} >
      <Pokeball />

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
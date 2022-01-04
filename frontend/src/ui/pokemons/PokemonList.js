import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard';

import Loading from '../components/Loading';

import { selectPokemonsLoading, selectPokemons } from '../../ducks/pokemons/selectors'
import { getPokemons } from '../../ducks/pokemons/operations'

const PokemonList = ({ pokemons, loading ,getPokemons }, props) => {
  const [page, setPage] = useState(new URLSearchParams(useLocation().search).get('page'));

  useEffect(() => {
    getPokemons(page)
  }, [page])

  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', margin:'0px 50px 0px 50px'}} >
      { loading ? <Loading></Loading> : <Loading rotation={true}/> }
      <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
        {
          pokemons.map(pokemon => {
            return (
              <PokemonCard key={pokemon.num}>
                <div style={{ display:'flex', boxShadow:'0px 3px 1px silver', backgroundColor: 'whitesmoke', width:'100%', justifyContent:'center'}}>
                  <h4 style={{ backgroundColor: 'white', width:'fit-content', padding:'5px 20px 5px 20px', borderRadius:'20px', boxShadow:'0.5px 2px 1.5px silver' }} >{pokemon.name}</h4>
                </div>
                <img style={{ width:'13em', height:'auto' }}  alt={pokemon.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.num}.png`}></img>
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
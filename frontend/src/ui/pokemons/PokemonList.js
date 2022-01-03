import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import {  } from 'styled-components'

import Loading from '../components/Loading';

import { selectPokemonsLoading, selectPokemons } from '../../ducks/pokemons/selectors'
import { getPokemons } from '../../ducks/pokemons/operations'

const PokemonList = ({ pokemons, loading ,getPokemons }, props) => {
  const page = new URLSearchParams(useLocation().search).get('page');

  useEffect(() => {
    getPokemons(page)
  }, [])

  return (
    <article>
    <Loading></Loading>
      {
        pokemons.map(pokemon => {
          return (
            <section key={pokemon.id}>
              <h4>{pokemon.identifier}</h4>
            </section>
          )
        })
      }
    </article>
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
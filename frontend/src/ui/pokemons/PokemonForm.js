import { useEffect } from 'react';
import { connect } from 'react-redux'
import { withRouter, useHistory } from 'react-router-dom'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as yup from 'yup';

import { selectTypesSelectOptions, selectTypesSelectOptionsMap } from '../../ducks/types/selectors'
import { selectPokemon, selectPokemonMoves, selectPokemonMovesName, selectPokemonsLoading } from '../../ducks/pokemons/selectors';
import { addPokemon, editPokemon, getPokemon, getPokemonMoves } from '../../ducks/pokemons/operations'
import { getTypes } from '../../ducks/types/operations';

import TypeSelectForm from '../components/TypeSelectForm';
import Loading from '../components/Loading';
import FormFieldContainer from '../components/FormFieldContainer';
import PokemonMoveSelectForm from './PokemonMoveSelectForm';

import { BigText, FormContainer, FormRow, FormInputContainer, MyButton } from '../styles/MultiUsageStyles';

const PokemonForm = ({ name, pokemon, pokemonMovesName, loading, addPokemon, editPokemon, types, typesMap, getPokemon, getTypes, getPokemonMoves }, props) => {
    
  const history = useHistory();

  useEffect(() => {
    if (!types.length) getTypes();
    if (name && !pokemon._id) getPokemon(name);
    if ( name && name !== pokemonMovesName) getPokemonMoves(name)
  }, [types.length]);

  const handleSubmit = (formObject) => {
    if (!formObject.alias) {
      formObject.alias = formObject.name.replace(/[^A-Z0-9]+/ig, "").toLowerCase()
    }
    const newPokemon = {
      name: formObject.name,
      alias: formObject.alias,
      abilities: formObject.abilities,
      stats: {
        atk: formObject.atk,
        def: formObject.def,
        hp: formObject.hp,
        spa: formObject.spa,
        spd: formObject.spd,
        spe: formObject.spe,
      },
      types: formObject.types,
      moves: formObject.moves
    }
    
    if (pokemon._id) {
      editPokemon(newPokemon);
      history.push(`/pokemons`)
    } else {
      addPokemon(newPokemon)
      history.push('/pokemons')
    }
  }
  // ZROBIC EDYCJE I DODAWANIE DLA POKEMONA I USUWANIE 

  const validationSchema = yup.object({
      name: yup.string().required(<p>Required</p>),
      moves: yup.array().required(<p>Required</p>),
      atk: yup.number().min(0, <p>Minimum 0</p>).max(150, <p>Maximum 150</p>).required(<p>Required</p>),
      def: yup.number().min(0, <p>Minimum 0</p>).max(150, <p>Maximum 150</p>).required(<p>Required</p>),
      hp: yup.number().min(0, <p>Minimum 0</p>).max(150, <p>Maximum 150</p>).required(<p>Required</p>),
      spa: yup.number().min(0, <p>Minimum 0</p>).max(150, <p>Maximum 150</p>).required(<p>Required</p>),
      spd: yup.number().min(0, <p>Minimum 0</p>).max(150, <p>Maximum 150</p>).required(<p>Required</p>),
      spe: yup.number().min(0, <p>Minimum 0</p>).max(150, <p>Maximum 150</p>).required(<p>Required</p>),
      types: yup.array().oneOf(types.map(option => option.value)).required(<p>Required</p>)
  })
  const initialValues = name
    ? {
        name: pokemon.name,
        alias: pokemon.alias,
        abilities: pokemon.abilities,
        moves: pokemon.moves,
        atk: pokemon.stats?.atk,
        def: pokemon.stats?.def,
        hp: pokemon.stats?.hp,
        spa: pokemon.stats?.spa,
        spd: pokemon.stats?.spd,
        spe: pokemon.stats?.spe,
        types: pokemon.types
      }
    : {
        name: '',
        alias: '',
        abilities: [],
        moves: [],
        atk: 0,
        def: 0,
        hp: 0,
        spa: 0,
        spd: 0,
        spe: 0,
        types: []
    };

  return (
      loading ? <Loading />
      : <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          enableReinitialize={true}>
          <Form>
            <FormContainer>
              <BigText>{name ? `Edit ${pokemon.name}` : "Add pokemon"}</BigText>

              <FormFieldContainer name="name" label="Name" />
              <FormFieldContainer name="atk" label="Attack" />
              <FormFieldContainer name="def" label="Defense" />
              <FormFieldContainer name="hp" label="Health" />
              <FormFieldContainer name="spa" label="Special Attack" />
              <FormFieldContainer name="spd" label="Special Defense" />
              <FormFieldContainer name="spe" label="Speed" />

              <FormRow>
                <FormInputContainer>
                  <label>Types</label>
                  <Field name="types" component={TypeSelectForm} limit={2} selectOptions={types} defaultValue={pokemon?.types.map(pokemonType => typesMap[pokemonType])} />
                </FormInputContainer>
                <ErrorMessage name="type"/>
              </FormRow>
              <FormRow>
                <FormInputContainer>
                  <label>Moves</label>
                </FormInputContainer>
                <ErrorMessage name="moves"/>
              </FormRow>
              
              <Field name="moves" component={PokemonMoveSelectForm} />

                <MyButton type="submit">
                  Confirm
                </MyButton>
            </FormContainer>
          </Form>
      </Formik>
  )
}

const mapStateToProps = (state, props) => ({
    pokemon: selectPokemon(state, props),
    name: props.match.params.name,
    pokemonMoves: selectPokemonMoves(state),
    pokemonMovesName: selectPokemonMovesName(state),
    types: selectTypesSelectOptions(state),
    typesMap: selectTypesSelectOptionsMap(state),
    loading: selectPokemonsLoading(state)
})

const mapDispatchToProps = {
  addPokemon,
  editPokemon,
  getPokemonMoves,
  getPokemon,
  getTypes
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonForm));
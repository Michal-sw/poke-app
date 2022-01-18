import { Form, Formik, Field, ErrorMessage } from 'formik'
import { connect } from 'react-redux'
import { withRouter, useHistory } from 'react-router-dom'
import * as yup from 'yup';
import { selectPokemon } from '../../ducks/pokemons/selectors';
import { addPokemon, editPokemon, getPokemon } from '../../ducks/pokemons/operations'
import { useEffect } from 'react';
import { selectTypesSelectOptions, selectTypesSelectOptionsMap } from '../../ducks/types/selectors'
import { getTypes } from '../../ducks/types/operations';
import TypeSelectForm from '../components/TypeSelectForm';
import { BigText, FormContainer, FormFieldContainer, FormInputContainer, MyField } from '../styles/MultiUsageStyles';

const PokemonForm = ({ name, pokemon, addPokemon, editPokemon, types, typesMap, getTypes }, props) => {
    
  const history = useHistory();

  useEffect(() => {
    if (!types.length) getTypes();
    if (name && !pokemon._id) getPokemon(name);
  }, [types.length]);

  const handleSubmit = (formObject) => {
    if (!formObject.alias) {
      formObject.alias = formObject.name.replace(/[^A-Z0-9]+/ig, "").toLowerCase()
    }
    if (pokemon._id) {
      editPokemon(formObject);
      history.push(`/pokemons`)
    } else {
      addPokemon(formObject)
      history.push('/pokemons')
    }
  }
  // ZROBIC EDYCJE I DODAWANIE DLA POKEMONA I USUWANIE 

  const validationSchema = yup.object({
      name: yup
        .string()
        .required(<p>Required</p>),
      power: yup
        .number()
        .min(0, <p>Minimum 0</p>)
        .max(250, <p>Maximum 250</p>)
        .required(<p>Required</p>),
      accuracy: yup
        .number()
        .min(0, <p>Minimum 0</p>)
        .max(100, <p>Maximum 100</p>)
        .required(<p>Required</p>),
      target: yup
        .string()
        .oneOf(['self', 'normal'], <p>Must be "self" or "normal"</p>)
        .required(<p>Required</p>),
      type: yup
        .string()
        .oneOf(types.map(option => option.value))
        .required(<p>Required</p>)
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
    : { name: '', alias: '', abilities: [], moves: [], atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0, types: [] };

  return (
      <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          enableReinitialize={true}>
          <Form>
            <FormContainer>
              <BigText>Add pokemon</BigText>
              <FormFieldContainer>
                <FormInputContainer>
                    <label>Name</label>
                    <MyField name="name"/>
                </FormInputContainer>
                <ErrorMessage name="name"/>
              </FormFieldContainer>

              <FormFieldContainer>
                <FormInputContainer>
                  <label>Power</label>
                  <MyField type="number" name="power"/>
                </FormInputContainer>
                <ErrorMessage name="power"/>
              </FormFieldContainer>

              <FormFieldContainer>
                <FormInputContainer>
                  <label>Accuracy</label>
                  <MyField type="number" name="accuracy"/>
                </FormInputContainer>
                <ErrorMessage name="accuracy"/>
              </FormFieldContainer>

              <FormFieldContainer>
                <FormInputContainer>
                  <label>Type</label>
                  <Field name="type" component={TypeSelectForm} typesSelectOptions={types} defaultValue={typesMap[pokemon.type]} />
                </FormInputContainer>
                <ErrorMessage name="type"/>
              </FormFieldContainer>

              <FormFieldContainer>
                <FormInputContainer>
                  <label>Target</label>
                  <MyField name="target"/>
                </FormInputContainer>
                <ErrorMessage name="target"/>
              </FormFieldContainer>

                <button type="submit">
                  Confirm
                </button>
            </FormContainer>
          </Form>
      </Formik>
  )
}

const mapStateToProps = (state, props) => ({
    pokemon: selectPokemon(state, props),
    name: props.match.params.name,
    types: selectTypesSelectOptions(state),
    typesMap: selectTypesSelectOptionsMap(state)
})

const mapDispatchToProps = {
  addPokemon,
  editPokemon,
  getTypes
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonForm));
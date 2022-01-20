import { useEffect } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik'
import { connect } from 'react-redux'
import { withRouter, useHistory } from 'react-router-dom'
import * as yup from 'yup';

import { selectMove, selectMovesLoading } from '../../ducks/moves/selectors';
import { selectTypesSelectOptions, selectTypesSelectOptionsMap } from '../../ducks/types/selectors'
import { addMove, editMove, getMove, deleteMove } from '../../ducks/moves/operations'
import { getTypes } from '../../ducks/types/operations';

import TypeSelectForm from '../components/TypeSelectForm';
import FormFieldContainer from '../components/FormFieldContainer';
import Loading from '../components/Loading';

import { BigText, FormContainer, FormRow, FormInputContainer, MyButton, DeleteButton } from '../styles/MultiUsageStyles';

const MoveForm = ({ name, move, loading, addMove, getMove, deleteMove, editMove, types, typesMap, getTypes }, props) => {
  const history = useHistory();

  useEffect(() => {
    if (!types.length) getTypes();
    if (name && !move._id) getMove(name);
  }, [types.length]);

  const handleSubmit = (formObject) => {
    if (!formObject.alias) {
      formObject.alias = formObject.name.replace(/[^A-Z0-9]+/ig, "").toLowerCase()
    }
    if (move._id) {
      editMove(formObject);
      history.push(`/moves`)
    } else {
      addMove(formObject)
      history.push('/moves')
    }
  }
  const handleRemove = () => {
    deleteMove(name);
    history.push('/moves')
  }

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
  const initialValues = {
    name: name ? move.name : '',
    alias: name ? move.alias : '',
    power: name ? move.power : 0,
    accuracy: name ? move.accuracy : 0,
    target: name ? move.target : '',
    type: name ? move.type : ''
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
              <BigText>{name ? `Edit ${move.name}` : 'Add move'}</BigText>

              <FormFieldContainer name="name" label="Name" />
              <FormFieldContainer name="power" label="Power" type="number" />
              <FormFieldContainer name="accuracy" label="Accuracy" type="number" />
              <FormRow>
                <FormInputContainer>
                  <label>Type</label>
                  <Field name="type" component={TypeSelectForm} selectOptions={types} defaultValue={typesMap[move.type]} />
                </FormInputContainer>
                <ErrorMessage name="type"/>
              </FormRow>
              <FormFieldContainer name="target" label="Target"/>

                <MyButton type="submit">
                  Confirm
                </MyButton>
            </FormContainer>
            {name ? <DeleteButton type="button" onClick={handleRemove}>REMOVE</DeleteButton> : null}
          </Form>
      </Formik>
  )
}

const mapStateToProps = (state, props) => ({
    move: selectMove(state, props),
    name: props.match.params.name,
    types: selectTypesSelectOptions(state),
    typesMap: selectTypesSelectOptionsMap(state),
    loading: selectMovesLoading(state)
})

const mapDispatchToProps = {
  addMove,
  editMove,
  deleteMove,
  getTypes,
  getMove
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoveForm));
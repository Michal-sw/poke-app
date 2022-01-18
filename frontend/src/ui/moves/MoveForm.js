import { Form, Formik, Field, ErrorMessage } from 'formik'
import { connect } from 'react-redux'
import { withRouter, useHistory } from 'react-router-dom'
import * as yup from 'yup';
import { selectMove } from '../../ducks/moves/selectors';
import { addMove, editMove, getMove } from '../../ducks/moves/operations'
import { useEffect } from 'react';
import { selectTypesSelectOptions, selectTypesSelectOptionsMap } from '../../ducks/types/selectors'
import { getTypes } from '../../ducks/types/operations';
import TypeSelectForm from '../components/TypeSelectForm';
import { BigText, FormContainer, FormFieldContainer, FormInputContainer, MyField } from '../styles/MultiUsageStyles';

const MoveForm = ({ name, move, addMove, editMove, types, typesMap, getTypes }, props) => {
    
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
      <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          enableReinitialize={true}>
          <Form>
            <FormContainer>
              <BigText>Add move</BigText>
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
                  <Field name="type" component={TypeSelectForm} typesSelectOptions={types} defaultValue={typesMap[move.type]} />
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
    move: selectMove(state, props),
    name: props.match.params.name,
    types: selectTypesSelectOptions(state),
    typesMap: selectTypesSelectOptionsMap(state)
})

const mapDispatchToProps = {
  addMove,
  editMove,
  getTypes
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoveForm));
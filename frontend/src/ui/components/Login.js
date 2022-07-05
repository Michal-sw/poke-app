import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Form, Formik } from 'formik'
import * as yup from 'yup';
import { useCookies } from 'react-cookie'

import { BigText, FormContainer } from '../styles/MultiUsageStyles';
import FormFieldContainer from './FormFieldContainer';
import KeycloakLogin from './KeycloakLogin';

const Login = () => {
  const [errMessage, setErrMessage] = useState('');
  const [cookies, setCookies, removeCookie] = useCookies(['user'])
  const history = useHistory();

  const handleSubmit = (formObject) => {
    fetch('https://localhost:3001/login', {
      method: 'POST',
      body: JSON.stringify(formObject),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(res => {
      if (res.error) setErrMessage(res.error);
      if (res.token) {
        const expireDate = new Date();
        expireDate.setHours(expireDate.getHours() + 1)
        setCookies('user', res.username);
        setCookies('token', res.token, { expires: expireDate});
        history.push("/pokemons");
      }
    })
    .catch(err => console.log(err))
  }

  const validationSchema = yup.object({
      username: yup.string().required(<p>Required</p>),
      password: yup.string().required(<p>Required</p>)
  })
  const initialValues = { username: '', password: '' };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        enableReinitialize={true}>
        <Form>
          <FormContainer>
            <BigText>Login</BigText>

            <FormFieldContainer name="username" label="Username" />
            <FormFieldContainer name="password" label="Password" />

              <button type="submit">
                Confirm
              </button>
              {errMessage ? <p>{errMessage}</p> : null}
          </FormContainer>
        </Form>
    </Formik>
      <FormContainer>
        <BigText>Login with keycloak</BigText>
          <KeycloakLogin/>
      </FormContainer>
    </>
  )
}


export default Login;
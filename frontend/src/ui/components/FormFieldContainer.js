import { ErrorMessage } from "formik";
import { FormInputContainer, FormRow, MyField } from "../styles/MultiUsageStyles";

const FormFieldContainer = ({ type, label, name  }) => {
  return (
    <FormRow>
      <FormInputContainer>
          <label>{label}</label>
          <MyField name={name} type={type ? type : 'string'}/>
      </FormInputContainer>
      <ErrorMessage name={name}/>
    </FormRow>
  )
}

export default FormFieldContainer;
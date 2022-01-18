import Select from 'react-select';
import MySelect from './MyTypeSelect';

const TypeSelect = ({ typesSelectOptions, onChange, value, limit }) => {
  if (limit) {
    return value.length < limit
    ? <MySelect typesSelectOptions={typesSelectOptions} onChange={onChange} value={value} />
    : <MySelect typesSelectOptions={[]} onChange={onChange} value={value} noOptionsMessage={`Max ${limit} types`} />
  } else {
  return (
    <MySelect typesSelectOptions={typesSelectOptions} onChange={onChange} value={value} />
  )
  }
}

export default TypeSelect;
import Select from 'react-select';

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

const MySelect = ({ typesSelectOptions, onChange, value, noOptionsMessage }) => (
  <Select
    closeMenuOnSelect={false}
    onChange={onChange}
    isMulti
    value={value}
    name='types'
    placeholder='Types...'
    options={typesSelectOptions}
    noOptionsMessage={() => noOptionsMessage}
    styles={{
      option: (styles, { data }) => ({
        ...styles,
        borderBottom: '1px solid black',
        backgroundColor: data.color
      }),
      multiValue: (styles, {data}) => ({
        ...styles,
        backgroundColor: data.color
      }),
      container: (styles, {data}) => ({
        ...styles,
        border: '3px solid whitesmoke',
        borderStyle: 'outset',
        borderRadius: '5px',
        boxShadow: 'inset 1px 1px 5px grey',
        fontSize: '1.7em',
        minWidth: '150px',
        maxWidth: '600px'
      }),
      menuList: (styles, {data}) => ({
        ...styles,
        border: '2px solid black',
        paddingTop: '0px',
        paddingBottom: '0px'
      })
    }} 
  /> 
);
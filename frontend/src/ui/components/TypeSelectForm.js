import Select from 'react-select';

const TypeSelectForm = ({ selectOptions, field, form, defaultValue, limit }) => {
  const behaveLikeMulti = limit > 1
  
  const onChange = behaveLikeMulti
    ? (option) => {form.setFieldValue(field.name, option.map(type => type.value))}
    : (option) => {form.setFieldValue(field.name, option.value)};

  const options = limit
    ? field.value.length >= limit
      ? []
      : selectOptions
    : selectOptions;

  const defValue = defaultValue ? defaultValue : limit ? [] : '';

  return <Select
      onChange={onChange}
      name='types'
      closeMenuOnSelect={behaveLikeMulti ? false : true}
      isMulti={behaveLikeMulti ? true : false}
      placeholder='Types...'
      defaultValue={defValue}
      options={options}
      styles={{
        option: (styles, { data }) => ({
          ...styles,
          borderBottom: '1px solid black',
          backgroundColor: data.color
        }),
        singleValue: (styles, {data}) => ({
          ...styles,
          borderRadius: '20px',
          backgroundColor: data.color,
          border: '0.5px solid black',
          boxShadow: '0px 0px 2px 0.5px grey',
          color: 'black'
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
}

export default TypeSelectForm;
import Select from 'react-select';

const TypeSelectForm = ({ typesSelectOptions, field, form, defaultValue }) => {
  
    return <Select
      onChange={(option) => {form.setFieldValue(field.name, option.value)}}
      defaultValue={defaultValue}
      name='types'
      placeholder='Types...'
      options={typesSelectOptions}
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
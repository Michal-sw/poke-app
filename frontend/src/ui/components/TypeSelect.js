import Select from 'react-select';

const TypeSelect = ({ typesSelectOptions }) => {

  return (
    <Select
      closeMenuOnSelect={false}
      isMulti
      name='types'
      options={typesSelectOptions}
      styles={{
        option: (styles, { data }) => ({
          ...styles,
          backgroundColor: data.color
        }),
        multiValue: (styles, {data}) => ({
          ...styles,
          backgroundColor: data.color
        })
      }} 
  />)
}

export default TypeSelect;
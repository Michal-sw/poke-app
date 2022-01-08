import Select from 'react-select';

const options = [
  { label: 'Pokedex', value: 'id' },
  { label: 'Pokedex desc', value: 'idd' },
  { label: 'Name', value: 'name' },
  { label: 'Name desc', value: 'named' },
]

const SortSelect = ({ onChange }) => {

  return (
    <Select
      closeMenuOnSelect={true}
      defaultValue={{ label: 'Pokedex', value: 'id' }}
      onChange={onChange}
      name='sort'
      options={options}
      styles={{
        option: (styles, { data, isSelected, isFocused }) => ({
          ...styles,
          borderBottom: '1px solid black',
          backgroundColor: isSelected
            ? '#ee1515'
            : isFocused
            ? '#fde7e7'
            : 'white',
          ':active': {
            backgroundColor: '#d61212',
            color: 'white'
          },
        }),
        singleValue: (styles, {data}) => ({
          ...styles,
        }),
        container: (styles, {data}) => ({
          ...styles,
          border: '3px solid whitesmoke',
          borderStyle: 'outset',
          borderRadius: '5px',
          boxShadow: 'inset 1px 1px 5px grey',
          fontSize: '1.7em',
          minWidth: '150px',
          maxHeight: 'fit-content',
        }),
        menuList: (styles, {data}) => ({
          ...styles,
          border: '2px solid black',
          paddingTop: '0px',
          paddingBottom: '0px'
        })
      }} 
  />)
}

export default SortSelect;
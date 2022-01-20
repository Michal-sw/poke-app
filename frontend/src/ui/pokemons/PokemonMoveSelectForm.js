import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';

import { selectMoves, selectMovesMaxPage } from '../../ducks/moves/selectors';
import { selectPokemonMoves } from '../../ducks/pokemons/selectors';
import { getMoves } from '../../ducks/moves/operations';

import { FlexRowContainer, PageButton, PageCounter } from '../styles/MultiUsageStyles';

const PokemonMoveSelectForm = ({ form, field, name, pokemonMoves, moves, getMoves, maxPage }) => {

  const onChange = (option) => { form.setFieldValue(field.name, option.map(move => move._id))}
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!maxPage) getMoves('page=1')
  }, [])

  const pageUp = () => { console.log(page);getMoves(`page=${page+1}`); setPage(page+1)}
  const pageDown = () => { getMoves(`page=${page-1}`); setPage(page-1) }

  return (

    <div>
      <div>
        <FlexRowContainer>
          { page > 1 ? <PageButton type='button' onClick={pageDown}>Previous page</PageButton> : null }
          { page >= maxPage ? null : <PageButton type='button' onClick={pageUp}>Next page</PageButton> }
        </FlexRowContainer>
        <PageCounter>{page} z {maxPage}</PageCounter>
      </div>
      <Select
        onChange={onChange}
        getOptionLabel={option => option.name}
        getOptionValue={option => option._id}
        closeMenuOnSelect={false}
        name='moves'
        isMulti
        placeholder='Moves...'
        defaultValue={ name ? pokemonMoves : null }
        options={moves}
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
            paddingBottom: '0px',
          })
        }} 
      /> 
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  form: props.form,
  field: props.field,
  name: props.match.params.name,
  pokemonMoves: selectPokemonMoves(state),
  moves: selectMoves(state),
  maxPage: selectMovesMaxPage(state)
})

const mapDispatchToProps = {
  getMoves
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonMoveSelectForm));
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selectPokemonsQuery, selectPokemonsQueryPage, selectPokemonsMaxPage } from '../../ducks/pokemons/selectors';
import { selectTypesSelectOptions } from '../../ducks/types/selectors'
import { getTypes } from '../../ducks/types/operations'

import { FlexRowContainer, PageButton, PageCounter } from '../styles/MultiUsageStyles';


const PokemonPageChanger = ({ query, page, maxPage }, props) => {
  const history = useHistory();

  const pageDown = () => {
    const newUrl = new URLSearchParams(query.toString());
    newUrl.set('page', parseInt(page) - 1);
    history.push(`/pokemons?${newUrl.toString()}`)
  };

  const pageUp = () => {
    const newUrl = new URLSearchParams(query.toString());
    newUrl.set('page', parseInt(page) + 1);
    history.push(`/pokemons?${newUrl.toString()}`)
  };

  return (
    <div>
      <FlexRowContainer>
        { page > 1 ? <PageButton onClick={pageDown}>Previous page</PageButton> : null }
        { page >= maxPage ? null : <PageButton onClick={pageUp}>Next page</PageButton> }
      </FlexRowContainer>
      <PageCounter>{page} z {maxPage}</PageCounter>
    </div>
  );
}

const mapStateToProps = (state) => ({
  query: selectPokemonsQuery(state),
  page: selectPokemonsQueryPage(state),
  maxPage: selectPokemonsMaxPage(state),

  typesSelectOptions: selectTypesSelectOptions(state),
});

const mapDispatchToProps = {
  getTypes
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonPageChanger);
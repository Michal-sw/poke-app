import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selectTypesSelectOptions } from '../../ducks/types/selectors'

import { getTypes } from '../../ducks/types/operations'

import { FlexRowContainer, PageButton, PageCounter } from '../styles/MultiUsageStyles';
import { selectMovesMaxPage, selectMovesQuery, selectMovesQueryPage } from '../../ducks/moves/selectors';


const MovesPageChanger = ({ query, page, maxPage }, props) => {
  const history = useHistory();

  const pageDown = () => {
    const newUrl = new URLSearchParams(query.toString());
    newUrl.set('page', parseInt(page) - 1);
    history.push(`/moves?${newUrl.toString()}`)
  };

  const pageUp = () => {
    const newUrl = new URLSearchParams(query.toString());
    newUrl.set('page', parseInt(page) + 1);
    history.push(`/moves?${newUrl.toString()}`)
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
  query: selectMovesQuery(state),
  page: selectMovesQueryPage(state),
  maxPage: selectMovesMaxPage(state),

  typesSelectOptions: selectTypesSelectOptions(state),
});

const mapDispatchToProps = {
  getTypes
};

export default connect(mapStateToProps, mapDispatchToProps)(MovesPageChanger);
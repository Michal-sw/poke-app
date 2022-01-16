import { connect } from 'react-redux';

import { selectMovesLoading, selectMoves, selectMovesQuery } from '../../ducks/moves/selectors';

import { getMoves } from '../../ducks/moves/operations';

import Loading from '../components/Loading';

import actions from '../../ducks/moves/actions';

import { ItemListContainer, MyLink  } from '../styles/MultiUsageStyles';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const MoveList = ({ moves, loading, query, changeQueryAction, getMoves }, props) => {
  const location = useLocation();

  useEffect(() => {
    const url = new URLSearchParams(location.search);

    if (query.toString() !== url.toString() || moves.length === 0) {
      changeQueryAction(url)
      getMoves(url.toString());
    }
  }, [location.search]);

  
  return (
    <ItemListContainer >
    { loading ? <Loading/> :
      moves.map(move => {
        return (
          <MyLink to={`moves/${move.alias}`} key={move.num}>
            {move.name}
          </MyLink>
        )
      })
    }
    </ItemListContainer>
  );
}


const mapStateToProps = (state) => ({
  moves: selectMoves(state),
  loading: selectMovesLoading(state),
  query: selectMovesQuery(state)
});

const mapDispatchToProps = {
  getMoves,
  changeQueryAction: actions.changeQueryAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoveList);
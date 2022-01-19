import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { selectMovesLoading, selectMoves, selectMovesQuery } from '../../ducks/moves/selectors';
import actions from '../../ducks/moves/actions';
import { getMoves } from '../../ducks/moves/operations';

import Loading from '../components/Loading';

import { BigText, MyLink  } from '../styles/MultiUsageStyles';
import { MoveCard, MoveListScrollable } from '../styles/MoveStyles';

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
    <MoveListScrollable >
    { loading ? <Loading/> :
      moves.map(move => {
        return (
          <MyLink to={`moves/${move.alias}`} key={move._id}>
            <MoveCard>
              <BigText>{move.name}</BigText>
              <BigText>Power: {move.power}</BigText>
            </MoveCard>
          </MyLink>
        )
      })
    }
    </MoveListScrollable>
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
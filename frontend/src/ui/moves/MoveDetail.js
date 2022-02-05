import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectMove, selectMovesLoading } from '../../ducks/moves/selectors';
import { selectTypesLoading, selectTypesSelectOptionsMap } from '../../ducks/types/selectors'
import { getMove } from '../../ducks/moves/operations';
import { getTypes } from '../../ducks/types/operations'

import TypeLogo from '../components/TypeLogo';
import MovePokemons from './MovePokemons';
import MoveStats from './MoveStats';

import { MainListFlexContainer, MyButton, MyLink, NameLabel } from '../styles/MultiUsageStyles';
import Loading from '../components/Loading';
import PageNotFound from '../components/PageNotFound';

const MoveDetail = ({ move, getMove, name, typesMap, getTypes, typesLoading, loading }, props) => {

  useEffect(() => {
    if (move.alias !== name) getMove(name);
    if (!typesMap[move.type] && !typesLoading) getTypes();
    console.log(move.alias)
  }, [move._id])

  return (
    loading ? <Loading/>
    : move.alias ?
      <MainListFlexContainer>
        <MyLink to={`/types/${typesMap[move.type]?.value}`}>
          <TypeLogo type={typesMap[move.type]?.label}/>
        </MyLink>
        <NameLabel>{move.name}</NameLabel>

        <MoveStats power={move.power} accuracy={move.accuracy} />

        <MovePokemons />
        <MyLink to={`/moves/${move.alias}/edit`}>
          { move._id ? <MyButton>Edit</MyButton> : null}
        </MyLink>
      </MainListFlexContainer>
      : <PageNotFound/>
  )
};

const mapStateToProps = (state, props) => ({
  name: props.match.params.name,
  move: selectMove(state, props),
  typesMap: selectTypesSelectOptionsMap(state),
  typesLoading: selectTypesLoading(state),
  loading: selectMovesLoading(state)
});

const mapDispatchToProps = {
  getMove,
  getTypes
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoveDetail));
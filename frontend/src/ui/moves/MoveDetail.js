import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectMove } from '../../ducks/moves/selectors';
import { selectTypesLoading, selectTypesSelectOptionsMap } from '../../ducks/types/selectors'

import { getMove } from '../../ducks/moves/operations';

import { getTypes } from '../../ducks/types/operations'
import TypeLogo from '../components/TypeLogo';
import { MainListFlexContainer, MyButton, MyLink, NameLabel } from '../styles/MultiUsageStyles';
import MovePokemons from './MovePokemons';
import MoveStats from './MoveStats';

const MoveDetail = ({ move, getMove, name, typesMap, getTypes, typesLoading }, props) => {

  useEffect(() => {
    if (move.alias !== name) getMove(name);
    if (!typesMap[move.type] && !typesLoading) getTypes();
  }, [move._id])

  return (
      <MainListFlexContainer>
        <MyLink to={`/types/${typesMap[move.type]?.value}`}>
          <TypeLogo type={typesMap[move.type]?.label}/>
        </MyLink>
        <NameLabel>{move.name}</NameLabel>

        <MoveStats power={move.power} accuracy={move.accuracy} />

        <MovePokemons />
        <MyLink to={`/moves/${move.alias}/edit`}>
          <MyButton>Edit</MyButton>
        </MyLink>
      </MainListFlexContainer>
  )
};

const mapStateToProps = (state, props) => ({
  name: props.match.params.name,
  move: selectMove(state, props),
  typesMap: selectTypesSelectOptionsMap(state),
  typesLoading: selectTypesLoading(state),
});

const mapDispatchToProps = {
  getMove,
  getTypes
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoveDetail));
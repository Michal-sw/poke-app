import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectType } from '../../ducks/types/selectors';

import TypeRelations from './TypeRelations';

import { FlexRowContainer } from '../styles/MultiUsageStyles';

const TypeAssociatedTypes = ({ type }, props) => {

  return (
      <FlexRowContainer>
        {type.strengths?.length ? <TypeRelations relation={"strengths"} /> : null}
        {type.immunes?.length ? <TypeRelations relation={"immunes"} /> : null}
        {type.weaknesses?.length ? <TypeRelations relation={"weaknesses"} /> : null}
      </FlexRowContainer>
  )
};


const mapStateToProps = (state, props) => ({
  type: selectType(state, props),
});

const mapDispatchToProps = {
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TypeAssociatedTypes));
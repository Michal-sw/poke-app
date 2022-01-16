import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectType } from '../../ducks/types/selectors';

import { TypeDetailViewContainer } from '../styles/TypeStyles';

import { getTypes } from '../../ducks/types/operations'
import TypeLogo from '../components/TypeLogo';

// Background Image wrzucic do publica
const TypeDetail = ({ type, getTypes }, props) => {

  useEffect(() => {
    if (!type.num) getTypes();
  }, [type.num])

  return (
      <TypeDetailViewContainer>

      </TypeDetailViewContainer>
  )
};


const mapStateToProps = (state, props) => ({
  type: selectType(state, props),
});

const mapDispatchToProps = {
  getTypes
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TypeDetail));
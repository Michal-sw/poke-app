import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectType, selectTypes, selectTypesMap } from '../../ducks/types/selectors';

import { TypeDetailViewContainer } from '../styles/TypeStyles';

import { getTypes } from '../../ducks/types/operations'
import TypeLogo from '../components/TypeLogo';
import { MyButton, MyLink, NameLabel } from '../styles/MultiUsageStyles';
import TypeAssociatedTypes from './TypeAssociatedTypes';

// Background Image wrzucic do publica
const TypeDetail = ({ type, typesMap, types, getTypes }, props) => {

  useEffect(() => {
    if (!type.num) getTypes();
  }, []);

  return (
      <TypeDetailViewContainer>
        <TypeLogo type={type.name}/>
        <NameLabel>{type.name}</NameLabel>

        <TypeAssociatedTypes />
        <MyLink to={`/pokemons?types=${type._id}`}>
          <MyButton>Show associated pokemons</MyButton>
        </MyLink>
      </TypeDetailViewContainer>
  )
};


const mapStateToProps = (state, props) => ({
  type: selectType(state, props),
  types: selectTypes(state),
  typesMap: selectTypesMap(state)
});

const mapDispatchToProps = {
  getTypes
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TypeDetail));
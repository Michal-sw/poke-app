import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectType, selectTypes, selectTypesMap } from '../../ducks/types/selectors';
import { getTypes } from '../../ducks/types/operations'

import TypeAssociatedTypes from './TypeAssociatedTypes';
import TypeLogo from '../components/TypeLogo';

import { TypeDetailViewContainer } from '../styles/TypeStyles';
import { MyButton, MyLink, NameLabel } from '../styles/MultiUsageStyles';

const TypeDetail = ({ type, getTypes }, props) => {

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
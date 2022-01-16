import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectType, selectTypes, selectTypesMap } from '../../ducks/types/selectors';

import { TypeDetailViewContainer } from '../styles/TypeStyles';

import { getTypes } from '../../ducks/types/operations'
import TypeLogo from '../components/TypeLogo';
import { ItemListContainer, NameLabel } from '../styles/MultiUsageStyles';

// Background Image wrzucic do publica
const TypeDetail = ({ type, typesMap, types, getTypes }, props) => {

  useEffect(() => {
    if (!type.num) getTypes();
    console.log(type)
  }, []);

  return (
      <TypeDetailViewContainer>
        <TypeLogo type={type.name}/>
        <NameLabel>{type.name}</NameLabel>
        <div>
          Strengths: 
          <ItemListContainer>
            {type.strengths ? type.strengths.map(strength => (
              <TypeLogo type={strength}/>
            )) : null}
          </ItemListContainer>
        
        </div>
        <div>
          Weaknesses:
          <ItemListContainer>
            {type.weaknesses ? type.weaknesses.map(weakness => (
              <TypeLogo type={weakness}/>
            )) : null}
          </ItemListContainer>
        </div>
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
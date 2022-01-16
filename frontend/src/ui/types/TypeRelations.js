import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectType, selectTypesMap } from '../../ducks/types/selectors';
import { AssociatedTypesContainer } from '../styles/TypeStyles';
import TypeLogo from '../components/TypeLogo';
import { BigText, ItemListContainer, MyLink } from '../styles/MultiUsageStyles';

const TypeRelations = ({ type, typesMap, relation }, props) => {
  
  return (
    <AssociatedTypesContainer>
      <BigText>{relation[0].toUpperCase() + relation.substring(1)}:</BigText>
      <ItemListContainer>
        {type[relation] ? type[relation].map(typeId => (
          <MyLink to={`/types/${typeId}`}>
            <TypeLogo type={typesMap[typeId]?.name}/>
          </MyLink>
        )) : null}
      </ItemListContainer>
    </AssociatedTypesContainer>
  )
};


const mapStateToProps = (state, props) => ({
  type: selectType(state, props),
  typesMap: selectTypesMap(state),
  relation: props.relation
});

const mapDispatchToProps = {
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TypeRelations));
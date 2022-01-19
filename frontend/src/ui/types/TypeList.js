import { useEffect } from 'react';
import { connect } from 'react-redux';

import { selectTypesLoading, selectTypes } from '../../ducks/types/selectors';
import { getTypes } from '../../ducks/types/operations';

import Loading from '../components/Loading';
import TypeLogo from '../components/TypeLogo';

import { ItemListContainer, MyLink, NameLabel } from '../styles/MultiUsageStyles';
import { TypeCard } from '../styles/TypeStyles';

const TypeList = ({ types, loading, getTypes }, props) => {

  useEffect(() => {
    if (types.length === 0) {
      getTypes();
    }
  }, []);

  
  return (
    <ItemListContainer >
    { loading ? <Loading/> :
      types.map(type => {
        return (
          <MyLink to={`types/${type._id}`} key={type.num}>
            <TypeCard>
              <TypeLogo type={type.name.toLowerCase()}/>
              <NameLabel>{type.name}</NameLabel>
            </TypeCard>
          </MyLink>
        )
      })
    }
    </ItemListContainer>
  );
}


const mapStateToProps = (state) => ({
  types: selectTypes(state),
  loading: selectTypesLoading(state),
});

const mapDispatchToProps = {
  getTypes,
};

export default connect(mapStateToProps, mapDispatchToProps)(TypeList);
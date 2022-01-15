import { connect } from 'react-redux';

import { selectTypesLoading, selectTypes, selectTypesQuery } from '../../ducks/types/selectors';

import { getTypes } from '../../ducks/types/operations';

import Loading from '../components/Loading';

import actions from '../../ducks/types/actions';
import TypeLogo from '../components/TypeLogo';
import { ItemListContainer, MyLink, NameLabel } from '../styles/MultiUsageStyles';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TypeCard } from '../styles/TypeStyles';


const TypeList = ({ types, loading, query, changeQueryAction, getTypes }, props) => {
  const location = useLocation();

  useEffect(() => {
    const url = new URLSearchParams(location.search);

    if (query.toString() !== url.toString() || types.length === 0) {
      changeQueryAction(url)
      getTypes(url.toString());
    }
  }, [location.search]);

  
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
  query: selectTypesQuery(state)
});

const mapDispatchToProps = {
  getTypes,
  changeQueryAction: actions.changeTypeQueryAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TypeList);
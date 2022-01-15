import { connect } from 'react-redux';

import { MainListFlexContainer } from '../styles/MultiUsageStyles';
import TypeList from './TypeList';


const TypeMasterView = ({ }, props) => {

  return (
    <MainListFlexContainer >
      <TypeList />
    </MainListFlexContainer>
  );
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(TypeMasterView);
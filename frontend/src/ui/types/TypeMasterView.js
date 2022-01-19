import { connect } from 'react-redux';
import TypeList from './TypeList';
import { MainListFlexContainer } from '../styles/MultiUsageStyles';


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
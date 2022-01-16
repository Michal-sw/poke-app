import { connect } from 'react-redux';

import { MainListFlexContainer } from '../styles/MultiUsageStyles';
import MoveList from './MoveList';


const MoveMasterView = ({ }, props) => {

  return (
    <MainListFlexContainer >
      <MoveList />
    </MainListFlexContainer>
  );
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(MoveMasterView);
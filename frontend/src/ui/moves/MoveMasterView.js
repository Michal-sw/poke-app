import { connect } from 'react-redux';

import { MainListFlexContainer, MyButton, MyLink } from '../styles/MultiUsageStyles';
import MoveList from './MoveList';
import MovePageChanger from './MovePageChanger';
import MoveSearch from './MoveSearch';


const MoveMasterView = ({ }, props) => {

  return (
    <MainListFlexContainer >
      <MoveSearch/>
      <MovePageChanger  />
      <MoveList />
      <MovePageChanger  />
      <MyLink to={'moves/add'}>
        <MyButton>Add Move</MyButton>
      </MyLink>
    </MainListFlexContainer>
  );
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(MoveMasterView);
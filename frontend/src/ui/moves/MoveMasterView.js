import { connect } from 'react-redux';

import MoveList from './MoveList';
import MovePageChanger from './MovePageChanger';
import MoveSearch from './MoveSearch';

import { MainListFlexContainer, MyButton, MyLink } from '../styles/MultiUsageStyles';

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
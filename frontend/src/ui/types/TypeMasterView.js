import { connect } from 'react-redux';

import { MainListFlexContainer } from '../styles/MultiUsageStyles';
import TypeList from './TypeList';


const TypeMasterView = ({ }, props) => {

  // Pomyslec czy query jest potrzebne dla typow???
  // Ich jest tak malo ze w sumie nie trzeba robic filtrow
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
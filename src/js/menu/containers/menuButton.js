import { connect } from 'react-redux';
import { menu } from '../modules/menuAction';
import menuButton from '../components/menuButton';

function mapStateToProps() {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    menu: () => dispatch(menu()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(menuButton);
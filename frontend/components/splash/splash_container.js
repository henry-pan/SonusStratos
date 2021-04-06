import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
   logout: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);

import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Discover from './discover';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);

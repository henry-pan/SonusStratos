import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import UserPage from './user_page';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId],
  tracks: Object.values(state.entities.tracks),
  users: state.entities.users,
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  fetchUser: user => dispatch(fetchUser(user)),
  updateUser: user => dispatch(updateUser(user)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

import { connect } from 'react-redux';
import { fetchAllTracks, fetchTrack, updateTrack, deleteTrack } from '../../actions/track_actions';
import { openModal } from '../../actions/modal_actions';
import UserPage from './user_page';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId],
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  // fetchAllTracks: () => dispatch(fetchAllTracks()),
  // fetchTrack: track => dispatch(fetchTrack(track)),
  // updateTrack: track => dispatch(updateTrack(track)),
  // deleteTrack: trackId => dispatch(deleteTrack(trackId)),
  // openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

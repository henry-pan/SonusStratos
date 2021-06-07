import { connect } from 'react-redux';
import { fetchAllTracks, fetchTrack, updateTrack, deleteTrack } from '../../actions/track_actions';
import { openModal } from '../../actions/modal_actions';
import TrackPage from './track_page';

const mapStateToProps = (state, ownProps) => ({
  track: state.entities.tracks[ownProps.match.params.trackId],
  users: state.entities.users,
  currentTrack: state.entities.tracks[state.ui.playbar.id],
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  fetchAllTracks: () => dispatch(fetchAllTracks()),
  fetchTrack: track => dispatch(fetchTrack(track)),
  updateTrack: (track, formData) => dispatch(updateTrack(track, formData)),
  deleteTrack: trackId => dispatch(deleteTrack(trackId)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackPage);

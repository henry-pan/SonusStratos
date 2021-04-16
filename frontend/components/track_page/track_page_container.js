import { connect } from 'react-redux';
import { fetchAllTracks, fetchTrack, updateTrack, updateTrackNoForm, deleteTrack } from '../../actions/track_actions';
import { receivePlayTrack, playTrack, pauseTrack } from '../../actions/play_actions';
import { openModal } from '../../actions/modal_actions';
import TrackPage from './track_page';

const mapStateToProps = (state, ownProps) => ({
  track: state.entities.tracks[ownProps.match.params.trackId],
  currentTrack: state.entities.tracks[state.ui.playbar.id],
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  fetchAllTracks: () => dispatch(fetchAllTracks()),
  fetchTrack: track => dispatch(fetchTrack(track)),
  updateTrack: (track, formData) => dispatch(updateTrack(track, formData)),
  updateTrackNoForm: track => dispatch(updateTrackNoForm(track)),
  deleteTrack: trackId => dispatch(deleteTrack(trackId)),
  openModal: modal => dispatch(openModal(modal)),
  receivePlayTrack: trackId => dispatch(receivePlayTrack(trackId)),
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack())
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackPage);

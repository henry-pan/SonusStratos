import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import { updateTrackNoForm } from '../../actions/track_actions';
import { receivePlayTrack, playTrack, pauseTrack } from '../../actions/play_actions';
import UserPage from './user_page';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId],
  tracks: Object.values(state.entities.tracks),
  currentUser: state.entities.users[state.session.id],
  currentTrack: state.entities.tracks[state.ui.playbar.id],
  isPlaying: state.ui.playbar.isPlaying,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: user => dispatch(fetchUser(user)),
  updateUser: user => dispatch(updateUser(user)),
  openModal: modal => dispatch(openModal(modal)),
  updateTrackNoForm: track => dispatch(updateTrackNoForm(track)),
  receivePlayTrack: trackId => dispatch(receivePlayTrack(trackId)),
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

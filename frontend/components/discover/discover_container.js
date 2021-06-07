import { connect } from 'react-redux';
import { fetchAllTracks, updateTrackNoForm } from '../../actions/track_actions';
import { receivePlayTrack, playTrack, pauseTrack } from '../../actions/play_actions';

import Discover from './discover';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  currentTrack: state.entities.tracks[state.ui.playbar.id],
  isPlaying: state.ui.playbar.isPlaying,
  tracks: Object.values(state.entities.tracks),
  users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  fetchAllTracks: () => dispatch(fetchAllTracks()),
  updateTrackNoForm: track => dispatch(updateTrackNoForm(track)),
  receivePlayTrack: trackId => dispatch(receivePlayTrack(trackId)),
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack())
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);

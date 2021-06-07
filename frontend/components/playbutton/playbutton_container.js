import { connect } from 'react-redux';
import { updateTrackNoForm } from '../../actions/track_actions';
import { receivePlayTrack, playTrack, pauseTrack } from '../../actions/play_actions';
import PlayButton from './playbutton';

const mapStateToProps = (state, ownProps) => ({
  currentTrack: state.ui.playbar.track,
  isPlaying: state.ui.playbar.isPlaying,
  users: state.entities.users,
});

const mapDispatchToProps = dispatch => ({
  updateTrackNoForm: track => dispatch(updateTrackNoForm(track)),
  receivePlayTrack: track => dispatch(receivePlayTrack(track)),
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayButton);

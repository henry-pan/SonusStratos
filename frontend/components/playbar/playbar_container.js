import { connect } from 'react-redux';
import { receivePlayTrack, playTrack, pauseTrack } from '../../actions/play_actions';
import PlayBar from './playbar';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  currentTrack: state.ui.playbar.track,
  isPlaying: state.ui.playbar.isPlaying,
  users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  receivePlayTrack: trackId => dispatch(receivePlayTrack(trackId)),
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayBar);

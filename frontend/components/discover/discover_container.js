import { connect } from 'react-redux';
import { fetchAllTracks, updateTrackNoForm } from '../../actions/track_actions';
import { receivePlayTrack, playTrack, pauseTrack } from '../../actions/play_actions';

import Discover from './discover';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  tracks: Object.values(state.entities.tracks),
  users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  fetchAllTracks: () => dispatch(fetchAllTracks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);

import { connect } from 'react-redux';
import { fetchAllTracks, updateTrackNoForm } from '../../actions/track_actions';
import Discover from './discover';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  tracks: Object.values(state.entities.tracks)
});

const mapDispatchToProps = dispatch => ({
  fetchAllTracks: () => dispatch(fetchAllTracks()),
  updateTrackNoForm: track => dispatch(updateTrackNoForm(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);

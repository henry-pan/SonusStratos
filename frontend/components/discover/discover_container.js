import { connect } from 'react-redux';
import { fetchAllTracks } from '../../actions/track_actions';

import Discover from './discover';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  tracks: state.entities.tracks,
  users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  fetchAllTracks: () => dispatch(fetchAllTracks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);

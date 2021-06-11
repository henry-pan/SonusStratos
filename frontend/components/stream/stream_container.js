import { connect } from 'react-redux';
import { fetchAllTracks } from '../../actions/track_actions';

import Stream from './stream';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  tracks: Object.values(state.entities.tracks),
  users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  fetchAllTracks: () => dispatch(fetchAllTracks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Stream);

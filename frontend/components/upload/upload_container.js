import { connect } from 'react-redux';
import { createTrack, clearErrors } from '../../actions/track_actions';
import Upload from './upload';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.tracks
});

const mapDispatchToProps = dispatch => ({
  createTrack: track => dispatch(createTrack(track)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);

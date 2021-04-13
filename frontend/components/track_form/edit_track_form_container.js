import { connect } from "react-redux";
import { updateTrack, clearErrors } from '../../actions/track_actions';
import { closeModal } from '../../actions/modal_actions';
import TrackForm from "./track_form";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.tracks,
  formType: "edit"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: track => dispatch(updateTrack(track)),
  clearErrors: () => dispatch(clearErrors()),
  closeModal: () => {
    dispatch(closeModal());
    dispatch(clearErrors());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackForm);

import { connect } from "react-redux";
import { updateUser, clearErrors } from '../../actions/user_actions';
import { closeModal } from '../../actions/modal_actions';
import UserForm from "./user_form";

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.userId],
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.users
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user, formData) => dispatch(updateUser(user, formData)),
  clearErrors: () => dispatch(clearErrors()),
  closeModal: () => {
    dispatch(closeModal());
    dispatch(clearErrors());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);

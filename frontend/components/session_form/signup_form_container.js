import { connect } from "react-redux";
import { signupUser } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  formType: "Signup"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(signupUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

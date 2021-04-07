import React from "react";
import { connect } from "react-redux";
import { signupUser } from "../../actions/session_actions";
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "Signup"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(signupUser(user)),
  otherForm: (<button onClick={() => dispatch(openModal('login'))}>
    Login
  </button>),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

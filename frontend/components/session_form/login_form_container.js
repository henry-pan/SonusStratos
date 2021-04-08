import React from "react";
import { connect } from "react-redux";
import { loginUser, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "Login"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(loginUser(user)),
  otherForm: (<button onClick={() => dispatch(openModal('signup'))}>
    Signup
  </button>),
  closeModal: () => {
    dispatch(closeModal());
    dispatch(clearErrors());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

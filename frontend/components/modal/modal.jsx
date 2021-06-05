import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import EditTrackFormContainer from '../track_form/edit_track_form_container';
import UserFormContainer from '../user_form/user_form_container';

function Modal({modal, closeModal, trackId, userId}) {
  if (!modal) {
    return null;
  }
  let component;
  let modalType;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      modalType = "modal-session";
      break;
    case 'signup':
      component = <SignupFormContainer />;
      modalType = "modal-session";
      break;
    case 'edit':
      component = <EditTrackFormContainer trackId={trackId}/>;
      modalType = "modal-edit-track";
      break;
    case 'user':
      component = <UserFormContainer userId={userId}/>;
      modalType = "modal-user";
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <span className="modal-close" onClick={closeModal}>&times;</span>
      <div className={modalType} onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.ui.modal,
    trackId: ownProps.trackId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => {
      dispatch(closeModal());
      dispatch(clearErrors());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

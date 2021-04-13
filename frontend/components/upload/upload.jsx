import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import CreateTrackFormContainer from "../track_form/create_track_form_container"
import Modal from "../modal/modal";

class Upload extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <NavBarContainer />
      <Modal />
      <div className="upload-content">
        <nav className="upload-nav">
          <span className="upload-nav-item">Upload</span>
        </nav>
        <div className="upload-container">
          <CreateTrackFormContainer />
        </div>
        <footer className="upload-footer">
          <p>By uploading, you agree to not upload inappropriate tracks or illegal content... or else.</p>
          <span><a href="https://github.com/henry-pan">GitHub</a> - <a href="https://www.linkedin.com/in/henry-pan/">LinkedIn</a></span>
          <p>Language: English (US)</p>
        </footer>
      </div>
      </>
    )
  }
}

export default Upload;

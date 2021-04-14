import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import CreateTrackFormContainer from "../track_form/create_track_form_container"
import Modal from "../modal/modal";

class Upload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      audioFile: null,
      title: ""
    }

    this.handleFile = this.handleFile.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleFile(e) {
    e.preventDefault();

    this.setState({
      audioFile: e.currentTarget.files[0],
      title: e.currentTarget.files[0].name
    });
  }

  render() {

    const notLoggedInUpload = (
      <div className="upload-not-logged-in">
        <h1>Please sign in to upload a track.</h1>
      </div>
    );

    const uploadTrack = (
      <div className="upload-track">
        <h1>Select a track to upload</h1>
        <input id="audio-upload" type="file" accept=".mp3, .ogg" onChange={this.handleFile} />
        <label htmlFor="audio-upload" className="upload-track-button">
          Upload Track
        </label>
      </div>
    );

    let uploadStage;
    if (this.props.currentUser) {
      if (this.state.audioFile) {
        uploadStage = <CreateTrackFormContainer audioFile={this.state.audioFile} title={this.state.title}/>
      } else {
        uploadStage = uploadTrack;
      }
    } else {
      uploadStage = notLoggedInUpload;
    }

    return (
      <>
      <NavBarContainer />
      <Modal />
      <div className="upload-content">
        <nav className="upload-nav">
          <span className="upload-nav-item">Upload</span>
        </nav>
        <div className="upload-container">
          {uploadStage}
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

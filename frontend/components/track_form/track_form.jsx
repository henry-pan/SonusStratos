import React from "react";
import { withRouter } from "react-router-dom";

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    
    let uploaderId = undefined;
    if (this.props.currentUser) uploaderId = this.props.currentUser.id;

    if (this.props.track) {
      this.state = {
        id: this.props.track.id,
        title: this.props.track.title,
        description: this.props.track.description,
        uploader_id: uploaderId,
        albumArt: null,
        albumArtPreview: this.props.track.albumArt
      };
    } else {
      this.state = {
        title: this.props.title,
        description: "",
        uploader_id: uploaderId,
        albumArt: null,
        albumArtPreview: null,
        audioFile: this.props.audioFile
      };
    }

    this.handleFile = this.handleFile.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(key, e) {
    this.setState({ [key]: e.target.value });
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({albumArt: file, albumArtPreview: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleCancel(e) {
    e.preventDefault();
    if (this.props.formType === "upload") {
      this.props.history.push("/discover");
    } else {
      this.props.closeModal();
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    if (this.props.track) formData.append('track[id]', this.state.id);
    formData.append('track[title]', this.state.title);
    formData.append('track[description]', this.state.description);
    formData.append('track[uploader_id]', this.props.currentUser.id);
    if (this.state.albumArt) formData.append('track[album_art]', this.state.albumArt);
    if (this.state.audioFile) formData.append('track[audio_file]', this.state.audioFile);
    
    // const track = Object.assign({}, this.state);
    if (this.props.formType === "upload") {
      this.props.processForm(formData).then(() => this.props.history.push("/discover"));
    } else {
      this.props.processForm(this.props.track, formData).then(this.props.closeModal);
    }
  }

  renderErrors(){
    return (
      <ul className="upload-form-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const submitText = this.props.formType === "upload" ? "Upload" : "Save Changes";
    const previewArt = this.state.albumArtPreview ? (
      <img className="upload-form-art" src={this.state.albumArtPreview}/>
    ) : (
      <img className="upload-form-art-empty" />
    );

    return (
      <div className="upload-form-container">
        <nav className="upload-form-nav">
          <span className="upload-form-nav-item">Basic info</span>
        </nav>
        <div className="upload-form-body">
          {previewArt}
          <form id="submit-upload-form" className="upload-form-form" onSubmit={this.handleSubmit}>
            <input id="art-upload" type="file" accept=".png, .jpg, .jpeg" onChange={this.handleFile} />
            <label htmlFor="art-upload" className="upload-art-button">
              Upload Image
            </label>
            <span className="upload-form-label-req">Title</span>
            <input className="upload-form-input" onChange={(e) => this.handleInput("title", e)} type="text" value={this.state.title} placeholder="Name your track"/>
            <span>Description</span>
            <textarea className="upload-form-input" onChange={(e) => this.handleInput("description", e)} value={this.state.description} placeholder="Describe your track"/>
            <input type="file" onChange={this.handleFile} />
            {this.renderErrors()}
          </form>
        </div>
        <div className="upload-form-submit">
          <span className="upload-form-submit-req">Required fields</span>
          <div className="upload-form-button-container">
            <button className="button-nostyle" onClick={this.handleCancel}>Cancel</button>
            <button className="button-track-form" form="submit-upload-form" type="submit">{submitText}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TrackForm);

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
        uploader_id: uploaderId
      };
    } else {
      this.state = {
        title: "",
        description: "",
        uploader_id: uploaderId
      };
    }

    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(key, e) {
    this.setState({ [key]: e.target.value });
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
    const track = Object.assign({}, this.state);
    if (this.props.formType === "upload") {
      this.props.processForm(track).then(() => this.props.history.push("/discover"));
    } else {
      this.props.processForm(track).then(this.props.closeModal);
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

    return (
      <div className="upload-form-container">
        <nav className="upload-form-nav">
          <span className="upload-form-nav-item">Basic info</span>
        </nav>
        <div className="upload-form-body">
          <img className="upload-form-art" src={window.nierAutomata}/>
          <form id="submit-upload-form" className="upload-form-form" onSubmit={this.handleSubmit}>
            <span className="upload-form-label-req">Title</span>
            <input className="upload-form-input" onChange={(e) => this.handleInput("title", e)} type="text" value={this.state.title} placeholder="Name your track"/>
            <span>Description</span>
            <textarea className="upload-form-input" onChange={(e) => this.handleInput("description", e)} value={this.state.description} placeholder="Describe your track"/>
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

import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id: this.props.user.id,
      username: this.props.user.username,
      firstname: this.props.user.firstname,
      lastname: this.props.user.lastname,
      city: this.props.user.city,
      country: this.props.user.country,
      bio: this.props.user.bio,
      profilePic: null,
      profilePicPreview: this.props.user.profilePic
    };
    
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
      this.setState({profilePic: file, profilePicPreview: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    // if (this.props.user) formData.append('user[id]', this.state.id);
    formData.append('user[username]', this.state.username);
    formData.append('user[firstname]', this.state.firstname);
    formData.append('user[lastname]', this.state.lastname);
    formData.append('user[city]', this.state.city);
    formData.append('user[country]', this.state.country);
    formData.append('user[bio]', this.state.bio);
    // Update profile pic only if user uploaded a new one
    if (this.state.profilePic) formData.append('user[profile_pic]', this.state.profilePic);
    
    this.props.processForm(this.props.user, formData).then(this.props.closeModal);
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
    const submitText = "Save changes";
    const previewPic = this.state.profilePicPreview ? (
      <img className="upload-form-art" src={this.state.profilePicPreview}/>
    ) : (
      <img className="upload-form-art-empty" />
    );

    return (
      <div className="upload-form-container">
        <nav className="upload-form-nav">
          <span className="upload-form-nav-item">Edit your profile</span>
        </nav>
        <div className="upload-form-body">
          {previewArt}
          <form id="submit-upload-form" className="upload-form-form" onSubmit={this.handleSubmit}>
            <input id="art-upload" type="file" accept=".png, .jpg, .jpeg" onChange={this.handleFile} />
            <label htmlFor="art-upload" className="upload-art-button">
            <FontAwesomeIcon icon={faCamera} /> Upload image
            </label>
            <span className="upload-form-label-req">Display name</span>
            <input className="upload-form-input" onChange={(e) => this.handleInput("username", e)} type="text" value={this.state.username} />
            <span>Bio</span>
            <textarea className="upload-form-input" onChange={(e) => this.handleInput("bio", e)} value={this.state.bio} />
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

export default withRouter(UserForm);

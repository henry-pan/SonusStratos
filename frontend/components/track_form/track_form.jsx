import React from "react";
import { withRouter } from "react-router-dom";

class TrackForm extends React.Component {
  constructor(props) {
    super(props);

    let uploaderId = undefined;
    if (this.props.currentUser) uploaderId = this.props.currentUser.id;

    this.state = {
      title: "",
      description: "",
      uploader_id: uploaderId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(key, e) {
    this.setState({ [key]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const track = Object.assign({}, this.state);
    this.props.processForm(track).then(this.props.history.push("/discover"));
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
            <button form="submit-upload-form" type="submit">Save</button>
          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(TrackForm);


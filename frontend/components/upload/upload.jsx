import React from "react";
import NavBarContainer from "../navbar/navbar_container";

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      uploader_id: this.props.currentUser.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(key, e) {
    this.setState({ [key]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const track = Object.assign({}, this.state);
    this.props.createTrack(track).then(this.props.history.push("/discover"));
  }

  renderErrors(){
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <>
      <NavBarContainer />
      <div className="content">
        <div>
          {this.props.currentUser ? <h1>Upload something, {this.props.currentUser.username}!</h1> : <h1>Log in to upload.</h1>}
          <form onSubmit={this.handleSubmit}>
            <input onChange={(e) => this.handleInput("title", e)} type="text" value={this.state.title} />
            <textarea onChange={(e) => this.handleInput("description", e)} value={this.state.description} />
            {this.renderErrors()}
            <button>Upload</button>
          </form>
        </div>
      </div>
      </>
    )
  }
}

export default Upload;

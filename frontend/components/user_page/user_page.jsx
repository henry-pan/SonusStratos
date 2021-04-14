import React from "react";
import { Link, Redirect } from "react-router-dom";
import NavBarContainer from "../navbar/navbar_container";
import Modal from "../modal/modal";

class UserPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    if (!this.props.user) return <Redirect to="/" />;

    return (
      <>
      <NavBarContainer />
      <Modal />
      {/* <div className="track-player">
        <div className="track-player-details-container">
          <div className="track-player-title-container">
            <button className="track-player-play-button" onClick={this.handlePlay}>
              {this.state.playing ? "❚❚" : "▶"}
            </button>
            <div className="track-player-title">
              <span>{this.props.track.uploader}</span>
              <h1>{this.props.track.title}</h1>
            </div>
          </div>
        </div>
        <img className="track-player-art" src={window.nierAutomata}/>
      </div> */}
      <div className="content">
        <div className="content-main">
          <div className="list-container">
            <h1>{this.props.user.username}'s Page</h1>
            <p>This is a just placeholder to avoid dead links. (MVP 6)</p>
          </div>
        </div>
        <div className="content-sidebar">
          <footer className="content-footer">
            <span><a href="https://github.com/henry-pan">GitHub</a> - <a href="https://www.linkedin.com/in/henry-pan/">LinkedIn</a></span>
            <p>Language: English (US)</p>
          </footer>
        </div>
      </div>
      </>
    )
  }
}

export default UserPage;

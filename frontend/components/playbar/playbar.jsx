import React from "react";
import { Link } from "react-router-dom";

class PlayBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      elapsed: 0,
      length: 0,
      volume: 0.5
    }
  }

  render() {
    if (!this.props.currentTrack) return null;

    let uploader = this.props.users[this.props.currentTrack.uploader_id];

    return (

      <div className="playbar">
        <div className="playbar-container">
          <audio id="audio" controls autoPlay src={this.props.currentTrack.audioFile}>
            Your browser does not support audio.
          </audio>
          <div className="playbar-controls">
          </div>
          <div className="playbar-progressbar">
          </div>
          <div className="playbar-volume">
          </div>
          <div className="playbar-track-item">
            <img src={this.props.currentTrack.albumArt} />
            <div className="playbar-track-item-container">
              <span><Link to={`/users/${this.props.currentTrack.uploader_id}`}>{uploader.username}</Link></span>
              <h1><Link to={`/tracks/${this.props.currentTrack.id}`}>{this.props.currentTrack.title}</Link></h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PlayBar;

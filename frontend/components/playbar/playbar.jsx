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

    return (

      <div className="playbar">
        <div className="playbar-container">
          <audio id="audio" src={this.props.currentTrack.audioFile}>
            Your browser does not support audio.
          </audio>
          <div className="playbar-controls">
          </div>
          <div className="playbar-progressbar">
          </div>
          <div className="playbar-volume">
          </div>
          <div className="playbar-track-item">
          </div>
        </div>
      </div>
    )
  }
}

export default PlayBar;

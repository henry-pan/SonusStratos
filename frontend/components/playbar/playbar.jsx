import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStepBackward, faRedoAlt, faVolumeMute, faVolumeDown, faVolumeUp  } from "@fortawesome/free-solid-svg-icons";

class PlayBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repeat: false,
      mute: false,
      volume: 0.5,
      elapsed: 0,
      length: 0
    }

    this.audioElement = document.getElementById("audio");

    this.toggleRepeat = this.toggleRepeat.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleSeek = this.handleSeek.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
  }

  toggleRepeat() {
    this.setState({ repeat: !this.state.repeat });
  }

  handleRestart() {

  }


  handlePlay() {

  }

  handleSeek() {

  }

  toggleMute() {
    this.setState({ mute: !this.state.mute});
  }

  handleVolume() {
    this.audioElement.volume = e.target.value;
    this.setState({ volume: e.target.value, mute: false });
  }

  calcTime() {

  }

  render() {
    if (!this.props.currentTrack) return null;

    let uploader = this.props.users[this.props.currentTrack.uploader_id];

    let volume = this.state.volume >= 0.5 ? <FontAwesomeIcon icon={faVolumeUp} /> : <FontAwesomeIcon icon={faVolumeDown} />;
    let volumeButton = this.state.mute ? <FontAwesomeIcon icon={faVolumeMute} /> : volume;

    return (
      <div className="playbar">
        <div className="playbar-container">
          <div className="playbar-controls">
            <button className="button-playbar" onClick={this.handleRestart}><FontAwesomeIcon icon={faStepBackward} /></button>
            <button className="button-playbar" onClick={this.handlePlay}><FontAwesomeIcon icon={faPlay} /></button>
            <button className="button-playbar" onClick={this.toggleRepeat}><FontAwesomeIcon icon={faRedoAlt} /></button>
          </div>
          <div className="playbar-progressbar">
            <audio id="audio" controls autoPlay src={this.props.currentTrack.audioFile}></audio>
            <input type="range" className="playbar-seeker" onChange={this.handleSeek} value="0" max={this.state.length} />
          </div>
          <div className="playbar-volume">
            <button className="button-playbar" onClick={this.toggleMute}>{volumeButton}</button>
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

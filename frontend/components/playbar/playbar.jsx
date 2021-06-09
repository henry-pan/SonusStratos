import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStepBackward, faRedoAlt, faVolumeMute, faVolumeDown, faVolumeUp  } from "@fortawesome/free-solid-svg-icons";

class PlayBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loop: false,
      muted: false,
      volume: 0.5,
      elapsed: 0,
      length: 0
    }

    this.audioElement = document.getElementById("audio");

    this.toggleLoop = this.toggleLoop.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleSeek = this.handleSeek.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
  }

  toggleLoop() {
    this.setState({ loop: !this.state.loop });
  }

  toggleMute() {
    this.setState({ muted: !this.state.muted});
  }

  handleRestart() {
    document.getElementById("audio").currentTime = 0
    this.setState({ elapsed: 0 });
  }




  handlePlay() {

  }

  handleSeek(e) {
    this.audioElement.currentTime = e.target.value;
    this.setState({ elapsed: e.target.value });

  }

  handleVolume(e) {
    this.audioElement.volume = e.target.value;
    this.setState({ volume: e.target.value, mute: false });
  }

  calcTime(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    let formattedMins = min <= 9 ? `0${min}` : min;
    let formattedSecs = sec <= 9 ? `0${sec}` : sec;
    return `${formattedMins}:${formattedSecs}`;
  }

  render() {
    if (!this.props.currentTrack) return null;

    let uploader = this.props.users[this.props.currentTrack.uploader_id];

    let volume = this.state.volume >= 0.5 ? <FontAwesomeIcon icon={faVolumeUp} /> : <FontAwesomeIcon icon={faVolumeDown} />;
    let volumeButton = this.state.muted ? <FontAwesomeIcon icon={faVolumeMute} /> : volume;
    let playButton = <FontAwesomeIcon icon={faPlay} />;

    let loopClass = this.state.loop ? "button-playbar btn-active" : "button-playbar";

    return (
      <div className="playbar">
        <div className="playbar-container">
          <div className="playbar-controls">
            <button className="button-playbar" onClick={this.handleRestart}><FontAwesomeIcon icon={faStepBackward} /></button>
            <button className="button-playbar" onClick={this.handlePlay}>{playButton}</button>
            <button className={loopClass} onClick={this.toggleLoop}><FontAwesomeIcon icon={faRedoAlt} /></button>
          </div>
          <div className="playbar-progressbar">
            <audio id="audio" controls autoPlay
              src={this.props.currentTrack.audioFile}
              loop={this.state.loop}
              muted={this.state.muted}
              volume={this.state.volume} />
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

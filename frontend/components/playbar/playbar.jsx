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
      duration: 0,
      remainder: false
    }

    this.setDuration = this.setDuration.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleSeek = this.handleSeek.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
  }

  toggleField(key) {
    this.setState({ [key]: !this.state[key] });
  }

  setDuration() {
    this.setState({ duration: document.getElementById("audio").duration });
  }

  handleRestart() {
    document.getElementById("audio").currentTime = 0;
    this.setState({ elapsed: 0 });
  }

  handlePlay() {

  }

  handleSeek(e) {
    document.getElementById("audio").currentTime = e.target.value;
    this.setState({ elapsed: e.target.value });
  }

  handleVolume(e) {
    document.getElementById("audio").volume = e.target.value;
    this.setState({ volume: e.target.value, muted: false });
  }

  calcTime(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    let formattedSecs = sec <= 9 ? `0${sec}` : sec;
    return `${min}:${formattedSecs}`;
  }

  render() {
    if (!this.props.currentTrack) return null;

    let uploader = this.props.users[this.props.currentTrack.uploader_id];

    let volumeOn = this.state.volume >= 0.5 ? <FontAwesomeIcon icon={faVolumeUp} /> : <FontAwesomeIcon icon={faVolumeDown} />;
    let volumeButton = this.state.muted ? <FontAwesomeIcon icon={faVolumeMute} /> : volumeOn;
    let playButton = <FontAwesomeIcon icon={faPlay} />;

    let loopClass = this.state.loop ? "button-playbar accent" : "button-playbar";

    let elapsed = this.calcTime(this.state.elapsed);
    let duration = this.state.remainder ? "-" + this.calcTime(this.state.duration - this.state.elapsed) : this.calcTime(this.state.duration);

    return (
      <div className="playbar">
        <div className="playbar-container">
          <div className="playbar-controls">
            <button className="button-playbar" onClick={this.handleRestart}><FontAwesomeIcon icon={faStepBackward} /></button>
            <button className="button-playbar" onClick={this.handlePlay}>{playButton}</button>
            <button className={loopClass} onClick={()=>this.toggleField("loop")}><FontAwesomeIcon icon={faRedoAlt} /></button>
          </div>
          <div className="playbar-progressbar">
            <span className="accent">{elapsed}</span>
            <div className="playbar-seeker-container">
              <audio id="audio" controls autoPlay
                src={this.props.currentTrack.audioFile}
                loop={this.state.loop}
                muted={this.state.muted}
                onLoadedMetadata={this.setDuration} />
              <input type="range" className="playbar-seeker" onInput={this.handleSeek} min="0" max={this.state.duration} />
            </div>
            <span onClick={()=>this.toggleField("remainder")}>{duration}</span>
          </div>
          <div className="playbar-volume">
            <button className="button-playbar button-volume" onClick={()=>this.toggleField("muted")}>{volumeButton}</button>
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

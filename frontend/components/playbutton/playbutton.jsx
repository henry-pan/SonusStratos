import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause  } from "@fortawesome/free-solid-svg-icons";

class PlayButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alreadyPlayed: false,
      playing: false
    };
    
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay() {

    if (!this.state.alreadyPlayed) {
      this.props.updateTrackNoForm({
        id: this.props.track.id,
        plays: this.props.track.plays + 1
      });
      this.setState({ alreadyPlayed: true });
    }
    
    if (!this.isCurrentTrack()) this.props.receivePlayTrack(this.props.track);

    this.setState({ playing: !this.state.playing });

    if (!this.state.playing) {
      this.props.playTrack();
      if (this.props.currentTrack) document.getElementById("audio").play();
    } else {
      this.props.pauseTrack();
      if (this.props.currentTrack) document.getElementById("audio").pause();
    }
  }

  isCurrentTrack() {
    if (!this.props.currentTrack) return false;
    return this.props.currentTrack.id === this.props.track.id;
  }

  render() {

    let thisTrackPlaying = this.isCurrentTrack() ? (this.state.playing && this.props.isPlaying) : false;
    let buttonClass = "button-play";
    if (this.props.size === "large") buttonClass += "-large";

    return (
      <button className={buttonClass} onClick={this.handlePlay}>
        {thisTrackPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
      </button>
    )
  }
}

export default PlayButton;

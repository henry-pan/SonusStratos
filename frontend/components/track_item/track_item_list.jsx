import React from "react";
import { Link } from "react-router-dom";

class TrackItemList extends React.Component {
  constructor(props){
    super(props);

    let audio;
    if (this.props.track) audio = new Audio(this.props.track.audioFile);

    this.state = {
      alreadyPlayed: false,
      playing: false,
      audio: audio
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
    
    let currentTrackId = null;
    if (this.props.currentTrack) currentTrackId = this.props.currentTrack.id;

    if (currentTrackId !== this.props.track.id){
      this.props.receivePlayTrack(this.props.track.id);
    }

    this.setState({ playing: !this.state.playing });
    if (!this.state.playing) {
      this.props.playTrack();
      if (currentTrackId) document.getElementById("audio").play();
    } else {
      this.props.pauseTrack();
      if (currentTrackId) document.getElementById("audio").pause();
    }
  }

  render() {

    // if (!this.props.track)

    let thisTrackPlaying = false;
    if (this.props.currentTrack && (this.props.currentTrack.id === this.props.track.id)) {
      thisTrackPlaying = this.state.playing && this.props.isPlaying;
    }

    return (
      <div className="list-container">
        <Link className="list-album-art" to={`/tracks/${this.props.track.id}`}><img src={this.props.track.albumArt}/></Link>
        
        <div className="list-detail">
          <div className="list-detail-title-date">
            <div className="list-title-container">
            <button className="list-play-button" onClick={this.handlePlay}>
              {thisTrackPlaying ? "❚❚" : "▶"}
            </button>
            <div className="list-title">
              <span><Link to={`/users/${this.props.track.uploader_id}`}>{this.props.track.uploader}</Link></span>
              <h1><Link to={`/tracks/${this.props.track.id}`}>{this.props.track.title}</Link></h1>
            </div>
            </div>
            <div className="list-uploaded-ago">
              <span>{this.props.track.posted}</span>
            </div>
          </div>
          <div className="list-stats">
            <span>▶ {this.props.track.plays}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default TrackItemList;

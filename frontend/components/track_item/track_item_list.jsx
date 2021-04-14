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
    
    if (!this.state.playing) {
      this.state.audio.play();
    } else {
      this.state.audio.pause();
    }
    this.setState({ playing: !this.state.playing });
  }

  render() {
    return (
      <div className="list-container">
        <Link className="list-album-art" to={`/tracks/${this.props.track.id}`}><img src={this.props.track.albumArt}/></Link>
        
        <div className="list-detail">
          <div className="list-detail-title-date">
            <div className="list-title-container">
            <button className="list-play-button" onClick={this.handlePlay}>
              {this.state.playing ? "❚❚" : "▶"}
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

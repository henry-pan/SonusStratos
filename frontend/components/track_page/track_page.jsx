import React from "react";
import NavBarContainer from "../navbar/navbar_container";

class TrackPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      alreadyPlayed: false,
      playing: false
    };
    
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay() {
    if (!this.state.alreadyPlayed) {
      this.props.updateTrack({
        id: this.props.track.id,
        plays: this.props.track.plays + 1
      });
      this.setState({ alreadyPlayed: true });
    }
    this.setState({ playing: !this.state.playing });
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId);
  }

  render() {

    if (!this.props.track) return null;

    return (
      <>
      <NavBarContainer />
      <div className="track-player">
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

      </div>
      <div className="content">
        <div className="content-main">
          <div className="track-comments">
            <p>Comments would go here.</p>
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

export default TrackPage;

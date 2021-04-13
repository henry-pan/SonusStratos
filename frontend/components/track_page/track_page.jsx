import React from "react";
import { Link } from "react-router-dom";
import NavBarContainer from "../navbar/navbar_container";
import Modal from "../modal/modal";

class TrackPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alreadyPlayed: false,
      playing: false,
      editing: false
    };
    
    this.handlePlay = this.handlePlay.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  handleEdit() {
    this.props.openModal("edit");
  }

  handleDelete() {
    this.props.deleteTrack(this.props.track.id).then(this.props.history.push("/discover"));
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId);
    window.scrollTo(0, 0);
  }

  render() {

    if (!this.props.track) return null;

    const comments = (
      <div className="track-comments-empty">
        <div className="track-comments-empty-image"></div>
        <h3>Seems a little quiet over here</h3>
        <h4>Be the first to comment on this track</h4>
      </div>
    );

    const isTrackOwner = this.props.currentUser && (this.props.currentUser.id === this.props.track.uploader_id);

    const actionButtons = isTrackOwner ? (
      <>
        <button className="track-action-button" onClick={this.handleEdit}>Edit</button>
        <button className="track-action-button" onClick={this.handleDelete}>Delete</button>
      </>
    ) : (
      <>
      </>
    );

    return (
      <>
      <NavBarContainer />
      <Modal trackId={this.props.track.id} />
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
          <div className="track-interface">
            <div className="track-button-container">
              {actionButtons}
            </div>
            <div className="track-stat-container">
              <span>▶ {this.props.track.plays}</span>
            </div>
          </div>
          <div className="track-about">
            <div className="track-uploader">
              <Link className="track-uploader-profile-pic" to={`/users/${this.props.track.uploader_id}`}/>
              <Link className="track-uploader-username" to={`/users/${this.props.track.uploader_id}`}>{this.props.track.uploader}</Link>
            </div>
            <div className="track-text-container">
              <p className="track-description">{this.props.track.description}</p>
              {comments}
            </div>
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

import React from "react";
import { Link } from "react-router-dom";
import NavBarContainer from "../navbar/navbar_container";
import Modal from "../modal/modal";
import CommentFormContainer from "../comment_form/comment_form_container";
import CommentsContainer from "../comments/comments_container";

class TrackPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alreadyPlayed: false,
      playing: false,
      editing: false,
      audio: null
    };
    
    this.handlePlay = this.handlePlay.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  handleEdit() {
    this.props.openModal("edit");
  }

  handleDelete() {
    this.props.deleteTrack(this.props.track.id).then(this.props.history.push("/discover"));
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId)
    .then(()=>{
      let audio = new Audio(this.props.track.audioFile);
      this.setState({ audio: audio });
    });
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

    const commentForm = (this.props.currentUser ? <CommentFormContainer trackId={this.props.track.id}/> : null);

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
              <span><Link to={`/users/${this.props.track.uploader_id}`}>{this.props.track.uploader}</Link></span>
              <h1>{this.props.track.title}</h1>
            </div>
            <div className="track-player-postdate">
              {this.props.track.posted}
            </div>
          </div>
        </div>
        <img className="track-player-art" src={this.props.track.albumArt}/>
      </div>
      <div className="content">
        <div className="content-main">
          <div className="track-interface">
            {commentForm}
            <div className="track-button-container">
              {actionButtons}
            </div>
            <div className="track-stat-container">
              <span>▶ {this.props.track.plays}</span>
            </div>
          </div>
          <div className="track-about">
            <div className="track-uploader">
              <Link to={`/users/${this.props.track.uploader_id}`}>
                <img className="track-uploader-profile-pic" src={this.props.track.uploaderPic} />
              </Link>
              <Link className="track-uploader-username" to={`/users/${this.props.track.uploader_id}`}>{this.props.track.uploader}</Link>
            </div>
            <div className="track-text-container">
              <p className="track-description">{this.props.track.description}</p>
              <CommentsContainer />
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

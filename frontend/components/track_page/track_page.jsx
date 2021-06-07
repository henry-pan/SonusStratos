import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faPen, faTrash, faMusic } from "@fortawesome/free-solid-svg-icons";
import NavBarContainer from "../navbar/navbar_container";
import Modal from "../modal/modal";
import Footer from "../footer/footer";
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

    const isTrackOwner = this.props.currentUser && (this.props.currentUser.id === this.props.track.uploader_id);
    const commentForm = (this.props.currentUser ? <CommentFormContainer trackId={this.props.track.id}/> : null);

    const actionButtons = isTrackOwner ? (
      <>
        <button className="track-action-button" onClick={this.handleEdit}><FontAwesomeIcon icon={faPen} /> Edit</button>
        <button className="track-action-button" onClick={this.handleDelete}><FontAwesomeIcon icon={faTrash} /> Delete</button>
      </>
    ) : (
      <>
      </>
    );

    let uploader = this.props.users[this.props.track.uploader_id];

    return (
      <>
      <NavBarContainer />
      <Modal trackId={this.props.track.id} />
      <div className="track-player">
        <div className="track-player-details-container">
          <div className="track-player-title-container">
            <button className="track-player-play-button" onClick={this.handlePlay}>
              {this.state.playing ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
            </button>
            <div className="track-player-title">
              <span><Link to={`/users/${this.props.track.uploader_id}`}>{uploader.username}</Link></span>
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
        <div className="content-main track-main">
          {commentForm}
          <div className="track-interface">
            <div className="track-button-container">
              {actionButtons}
            </div>
            <div className="track-stat-container">
              <span><FontAwesomeIcon icon={faPlay} size="xs" /> {this.props.track.plays}</span>
            </div>
          </div>
          <div className="track-about">
            <div className="track-uploader">
              <Link to={`/users/${this.props.track.uploader_id}`}>
                <img className="track-uploader-profile-pic" src={uploader.profilePic} />
              </Link>
              <Link className="track-uploader-username" to={`/users/${this.props.track.uploader_id}`}>{uploader.username}</Link>
              <Link className="track-uploader-numtracks" to={`/users/${this.props.track.uploader_id}`}><FontAwesomeIcon icon={faMusic} size="xs" /> {uploader.numTracks}</Link>
            </div>
            <div className="track-text-container">
              <p className="track-description">{this.props.track.description}</p>
              <CommentsContainer uploaderId={this.props.track.uploader_id} />
            </div>
          </div>
        </div>
        <div className="content-sidebar">
          <footer className="content-footer">
            <Footer />
          </footer>
        </div>
      </div>
      </>
    )
  }
}

export default TrackPage;

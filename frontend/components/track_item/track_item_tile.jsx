import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart  } from "@fortawesome/free-solid-svg-icons";
import PlayButtonContainer from "../playbutton/playbutton_container";

class TrackItemTile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hover: false
    }
  }

  render() {
    return (
      <div className="tile-container">
        <PlayButtonContainer track={this.props.track} size="small" />
        <Link className="tile-album-art" to={`/tracks/${this.props.track.id}`}><img src={this.props.track.albumArt}/></Link>
        <h2><Link to={`/tracks/${this.props.track.id}`}>{this.props.track.title}</Link></h2>
        <h3><Link to={`/users/${this.props.track.uploader_id}`}>{this.props.uploader.username}</Link></h3>
      </div>
    )
  }
}

export default TrackItemTile;

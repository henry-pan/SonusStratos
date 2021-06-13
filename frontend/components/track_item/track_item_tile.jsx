import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart  } from "@fortawesome/free-solid-svg-icons";
import PlayButtonContainer from "../playbutton/playbutton_container";

class TrackItemTile extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="tile-container">
        <div className="tile-album-art">
          <div className="tile-button-container">
            <PlayButtonContainer track={this.props.track} size="tile" />
          </div>
          <Link to={`/tracks/${this.props.track.id}`}><img src={this.props.track.albumArt}/></Link>
        </div>
        <h2 className="tile-title"><Link to={`/tracks/${this.props.track.id}`}>{this.props.track.title}</Link></h2>
        <h3 className="tile-uploader"><Link to={`/users/${this.props.track.uploader_id}`}>{this.props.uploader.username}</Link></h3>
      </div>
    )
  }
}

export default TrackItemTile;

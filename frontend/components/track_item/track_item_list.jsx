import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCommentAlt  } from "@fortawesome/free-solid-svg-icons";
import PlayButtonContainer from "../playbutton/playbutton_container";

class TrackItemList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    let numComments = null;
    if (this.props.track.numComments > 0) {
      numComments = <span>
        <Link to={`/tracks/${this.props.track.id}`}>
          <FontAwesomeIcon icon={faCommentAlt} /> {this.props.track.numComments}
        </Link>
        </span>;
    }

    return (
      <div className="list-container">
        <Link className="list-album-art" to={`/tracks/${this.props.track.id}`}><img src={this.props.track.albumArt}/></Link>
        
        <div className="list-detail">
          <div className="list-detail-title-date">
            <div className="list-title-container">
              <PlayButtonContainer track={this.props.track} size="small" />
              <div className="list-title">
                <span><Link to={`/users/${this.props.track.uploader_id}`}>{this.props.uploader.username}</Link></span>
                <h1><Link to={`/tracks/${this.props.track.id}`}>{this.props.track.title}</Link></h1>
              </div>
            </div>
            <div className="list-uploaded-ago">
              <span>{this.props.track.posted}</span>
            </div>
          </div>
          <div className="list-stats">
            <span><FontAwesomeIcon icon={faPlay} size="xs" /> {this.props.track.plays}</span>
            {numComments}
          </div>
        </div>
      </div>
    )
  }
}

export default TrackItemList;

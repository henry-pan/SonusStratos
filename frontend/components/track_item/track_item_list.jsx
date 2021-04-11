import React from "react";
import { Link } from "react-router-dom";

class TrackItemList extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.track;


    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay() {
    this.props.updateTrack({
      id: this.props.track.id,
      plays: this.props.track.plays + 1
    });
  }

  render() {

    return (
      <div className="list-container">
        <Link className="list-album-art" to="/"><img src={window.nierAutomata}/></Link>
        
        <div className="list-detail">
          <div className="list-title-container">
            <button className="list-play-button" onClick={this.handlePlay}>▶</button>
            <div className="list-title">
              <span>{this.props.track.uploader}</span>
              <h1>{this.props.track.title}</h1>
            </div>
          </div>
          <span>▶ {this.props.track.plays}</span>
        </div>
      </div>
    )
  }
}

export default TrackItemList;

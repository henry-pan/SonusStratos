import React from "react";

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
      <div>
        <img src={window.nierAutomata}/>
        <div>
          <button onClick={this.handlePlay}>Play</button>
          <span>{this.props.track.uploader}</span>
          <h1>{this.props.track.title}</h1>
        </div>
        <a>Plays: {this.props.track.plays}</a>
      </div>
    )
  }
}

export default TrackItemList;

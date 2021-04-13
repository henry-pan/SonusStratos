import React from "react";

// Currently unused.

const TrackItemFull = props => {

  return (
    <div>
      <img src={window.nierAutomata}/>
      <div>
        <span>{props.track.uploader}</span>
        <h1>{props.track.title}</h1>
      </div>
      <li>Plays: {props.track.plays}</li>
      <li></li>
    </div>
  )
}

export default TrackItemFull;

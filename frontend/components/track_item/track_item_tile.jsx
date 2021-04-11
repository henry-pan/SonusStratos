import React from "react";

const TrackItemTile = props => {

  return (
    <div>
      <img src={window.nierAutomata}/>
      <div>
        <span>{props.track.uploader_id}</span>
        <h1>{props.track.title}</h1>
      </div>
      {/* <li>{props.track.description}</li> */}
      <li>Plays: {props.track.plays}</li>
      <li></li>
    </div>
  )
}

export default TrackItemTile;

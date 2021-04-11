import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import TrackItemTile from "../track_item/track_item_tile";

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllTracks();
  }

  render() {

    const tracks = this.props.tracks.map((track, i) => (
      <li key={track.id}>
        <TrackItemTile track={track} />
      </li>
    ));

    return (
      <>
      <NavBarContainer />
      <div className="content">
        <div>
        {this.props.currentUser ? <h1>Welcome, {this.props.currentUser.username}!</h1> : <h1>Explore music.</h1>}
        <ul>{tracks}</ul>
        </div>
      </div>
      </>
    )
  }
}

export default Discover;

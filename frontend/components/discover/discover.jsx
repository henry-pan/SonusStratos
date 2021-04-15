import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import PlayBarContainer from "../playbar/playbar_container";
import TrackItemTile from "../track_item/track_item_tile";
import TrackItemList from "../track_item/track_item_list";
import Modal from "../modal/modal";

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
        <TrackItemList track={track} updateTrackNoForm={this.props.updateTrackNoForm}/>
      </li>
    ));

    return (
      <>
      <NavBarContainer />
      <PlayBarContainer />
      <Modal />
      <div className="content">
        <div className="content-main">
        {this.props.currentUser ? <h1>Welcome, {this.props.currentUser.username}!</h1> : <h1>Explore music.</h1>}
        <ul>{tracks}</ul>
        </div>
        <div className="content-sidebar">
          <footer className={`content-footer content-footer-discover`}>
            <span><a href="https://github.com/henry-pan">GitHub</a> - <a href="https://www.linkedin.com/in/henry-pan/">LinkedIn</a></span>
            <p>Language: English (US)</p>
          </footer>
        </div>
      </div>
      </>
    )
  }
}

export default Discover;

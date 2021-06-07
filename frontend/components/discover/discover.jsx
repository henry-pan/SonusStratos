import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import TrackItemTile from "../track_item/track_item_tile";
import TrackItemList from "../track_item/track_item_list";
import Modal from "../modal/modal";
import Footer from "../footer/footer";

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllTracks();
    window.scrollTo(0, 0);
  }

  render() {

    const tracks = this.props.tracks.map((track, i) => (
      <li key={track.id}>
        <TrackItemList track={track}
        uploader={this.props.users[track.uploader_id]}
        updateTrackNoForm={this.props.updateTrackNoForm}
        currentTrack={this.props.currentTrack}
        isPlaying={this.props.isPlaying}
        receivePlayTrack={this.props.receivePlayTrack}
        playTrack={this.props.playTrack}
        pauseTrack={this.props.pauseTrack}
        />
      </li>
    ));

    return (
      <>
      <NavBarContainer />
      <Modal />
      <div className="content">
        <div className="content-main">
        {this.props.currentUser ? <h1>Welcome, {this.props.currentUser.username}!</h1> : <h1>Explore music.</h1>}
        <ul>{tracks}</ul>
        </div>
        <div className="content-sidebar">
          <footer className={`content-footer content-footer-discover`}>
            <Footer />
          </footer>
        </div>
      </div>
      </>
    )
  }
}

export default Discover;

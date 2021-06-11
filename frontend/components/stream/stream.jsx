import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import TrackItemList from "../track_item/track_item_list";
import Modal from "../modal/modal";
import Footer from "../footer/footer";

class Stream extends React.Component {
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
        />
      </li>
    ));

    return (
      <>
      <NavBarContainer />
      <Modal />
      <div className="content">
        <div className="content-main">
          <h1>Hear the lastest posts from the community of SonusStratos:</h1>
          <ul className="stream-list">{tracks}</ul>
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

export default Stream;

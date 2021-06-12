import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import TrackItemTile from "../track_item/track_item_tile";
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
    if (Object.keys(this.props.tracks).length === 0) return null;

    // const tracks = this.props.tracks.map((track, i) => (
    //   <li key={track.id}>
    //     <TrackItemList track={track}
    //     uploader={this.props.users[track.uploader_id]}
    //     />
    //   </li>
    // ));

    let xehryn = [1,2,16,17,18,19,20,21,22];
    let battle = [11,15,14,7];
    let emotion = [3,4];
    let epic = [13,5,12];
    let level = [6,8,10,9];

    return (
      <>
      <NavBarContainer />
      <Modal />
      <div className="content">
        <div className="content-main">
          <section>
            <h2>Studio Xehryn Mix</h2>
            <h3>Songs from Studio Xehryn games</h3>
            <TrackItemTile track={this.props.tracks[17]} uploader={this.props.users[this.props.tracks[17].uploader_id]} />
            <TrackItemTile track={this.props.tracks[20]} uploader={this.props.users[this.props.tracks[20].uploader_id]} />
            <ul></ul>
          </section>
          <section>
            <h2>Awesome Battle Themes</h2>
            <h3>High energy themes for battles</h3>
            <ul></ul>
          </section>
          <section>
            <h2>Emotional</h2>
            <h3>To go along a masterfully crafted narrative</h3>
            <ul></ul>
          </section>
          <section>
            <h2>Triumphant and Epic</h2>
            <h3>Moments of triumph and awe</h3>
            <ul></ul>
          </section>
          <section>
            <h2>Catchy Level Themes</h2>
            <h3>Levels or stages to keep coming back to</h3>
            <ul></ul>
          </section>
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

import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import TrackItemTile from "../track_item/track_item_tile";
import Modal from "../modal/modal";
import Footer from "../footer/footer";
import Carousel from "./carousel";

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    this.props.fetchAllTracks()
    .then(() => this.setState({ loaded: true }));
    window.scrollTo(0, 0);
  }

  mapTracks(arr) {
    return arr.map((i) =>
      <TrackItemTile key={i} track={this.props.tracks[i]} uploader={this.props.users[this.props.tracks[i].uploader_id]} />
    );
  }

  render() {
    if (!this.state.loaded) return null;
    let xehrynTracks, battleTracks, emotionTracks, epicTracks, levelTracks;
    if (this.state.loaded) {
      // xehrynTracks = this.mapTracks([1,2,16,17,18,19,20,21,22]);
      xehrynTracks = this.mapTracks([1,2,16,17,18,19,20,21,22,6,9,8,10,11,14,15,7,3,4,13,5,12]);
      levelTracks = this.mapTracks([6,9,8,10,20,18,17]);
      battleTracks = this.mapTracks([11,14,15,7,13,12,16,21,22]);
      emotionTracks = this.mapTracks([3,4]);
      epicTracks = this.mapTracks([13,5,12,14,2,19]);
    }

    return (
      <>
      <NavBarContainer />
      <Modal />
      <div className="content">
        <div className="content-main">
          <section className="discover-section">
            <div className="discover-title-container">
              <h2>Studio Xehryn Mix</h2>
              <h3>Songs from Studio Xehryn games, Gate of Providence and Dreamshot Dissonance</h3>
            </div>
            <Carousel trackItems={xehrynTracks} />
          </section>
          <section className="discover-section">
            <div className="discover-title-container">
              <h2>Catchy Level Themes</h2>
              <h3>Levels, stages, or zones to keep coming back to</h3>
            </div>
            <Carousel trackItems={levelTracks} />
          </section>
          <section className="discover-section">
            <div className="discover-title-container">
              <h2>Awesome Battle Themes</h2>
              <h3>High energy themes for defeating enemies</h3>
            </div>
            <Carousel trackItems={battleTracks} />
          </section>
          <section className="discover-section">
            <div className="discover-title-container">
              <h2>Emotional</h2>
              <h3>Accompanying a masterfully crafted narrative</h3>
            </div>
            <div className="discover-list">
              {emotionTracks}
            </div>
          </section>
          <section className="discover-section">
            <div className="discover-title-container">
              <h2>Triumphant and Epic</h2>
              <h3>Moments of triumph and awe</h3>
            </div>
            <Carousel trackItems={epicTracks} />
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

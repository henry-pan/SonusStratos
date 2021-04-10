import React from "react";
import NavBarContainer from "../navbar/navbar_container";

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllTracks();
  }

  render() {

    const tracks = this.props.tracks.map((track, i) => {
      <li>
        <ul>
          <li>{track.title}</li>
          <li>{track.description}</li>
          <li>{track.plays}</li>
          <li>{track.uploader_id}</li>
        </ul>
      </li>
    });

    console.log(this.props.tracks);

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

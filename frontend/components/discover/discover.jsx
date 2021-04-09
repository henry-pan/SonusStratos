import React from "react";
import NavBarContainer from "../navbar/navbar_container";

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <NavBarContainer />
      <div className="content">
        <div>
        {this.props.currentUser ? <h1>Welcome, {this.props.currentUser.username}!</h1> : <></>}
        </div>
      </div>
      </>
    )
  }
}

export default Discover;

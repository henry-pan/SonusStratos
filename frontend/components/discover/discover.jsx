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
          Hello.
        </div>
      </div>
      </>
    )
  }
}

export default Discover;

import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

    <header className="navbar">
      <div className="navbar-container">
        <nav className="navbar-left">
          <Link className="navbar-logo" to="/" />
          <Link className="navbar-item" to="/">Home</Link>
        </nav>
        <nav className="navbar-right">
          <Link className="navbar-item" to="/">Logout</Link>
        </nav>

      </div>

    </header>
    )
  }
}

export default NavBar;

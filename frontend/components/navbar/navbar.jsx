import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const navbar = this.props.currentUser ? (
      <nav className="navbar-right">
        <Link className="navbar-item" to="/">Upload</Link>
        <Link className="navbar-item" to="/">{this.props.currentUser.username}</Link>
        <button onClick={this.props.logout}>Log Out</button>
      </nav>
    ) : (
      <nav className="navbar-right">
        <button className="button-transparent" onClick={() => this.props.openModal('login')}>Sign in</button>
        <button onClick={() => this.props.openModal('signup')}>Create account</button>
        <Link className="navbar-item" to="/">Upload</Link>
      </nav>
    );


    return (

      <header className="navbar">
        <div className="navbar-container">
          <nav className="navbar-left">
            <Link className="navbar-logo-full" to="/" />
            <Link className="navbar-item" to="/">Home</Link>
          </nav>
          {navbar}
        </div>
      </header>
    )
  }
}

export default NavBar;
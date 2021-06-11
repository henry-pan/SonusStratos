import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const navlogo = this.props.currentUser ? (
      <Link className="navbar-logo" to="/" />
    ) : (
      <Link className="navbar-logo-full" to="/" />
    );

    const navbar = this.props.currentUser ? (
      <nav className="navbar-right">
        <Link className="navbar-item" to="/upload">Upload</Link>
        <Link className={`navbar-item navbar-profile`} to={`/users/${this.props.currentUser.id}`}>
            <img className="navbar-profile-pic" src={this.props.currentUser.profilePic} />
            {this.props.currentUser.username}
        </Link>
        <button onClick={this.props.logout}>Log Out</button>
        <a className="navbar-item item-icon" href="https://github.com/henry-pan/SonusStratos" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
      </nav>
    ) : (
      <nav className="navbar-right">
        <button className="button-transparent" onClick={() => this.props.openModal('login')}>Sign in</button>
        <button onClick={() => this.props.openModal('signup')}>Create account</button>
        <Link className="navbar-item" to="/upload">Upload</Link>
        <a className="navbar-item item-icon" href="https://github.com/henry-pan/SonusStratos" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
      </nav>
    );


    return (

      <header className="navbar">
        <div className="navbar-container">
          <nav className="navbar-left">
            {navlogo}
            <Link className="navbar-item" to="/discover">Home</Link>
          </nav>
          {navbar}
        </div>
      </header>
    )
  }
}

export default NavBar;

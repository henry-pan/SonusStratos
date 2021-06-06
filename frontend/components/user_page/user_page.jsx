import React from "react";
import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import NavBarContainer from "../navbar/navbar_container";
import TrackItemList from "../track_item/track_item_list";
import Modal from "../modal/modal";
import Footer from "../footer/footer";

class UserPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleEdit() {
    this.props.openModal("user");
  }

  renderSubtitle(first, second, seperator) {
    let subtitle = "";
    if (!!first) subtitle += first;
    if (!!first && !!second) subtitle += seperator;
    if (!!second) subtitle += second;
    return <h2>{subtitle}</h2>;
  }


  render() {
    if (!this.props.user) return <Redirect to="/" />;

    const isOwnPage = this.props.currentUser && (this.props.currentUser.id === this.props.user.id);
    const hasName = !!this.props.user.firstname || !!this.props.user.lastname;
    const hasLocation = !!this.props.user.city || !!this.props.user.country;

    let editPage = null;
    if (isOwnPage) editPage = <button className="user-edit-button" onClick={this.handleEdit}><FontAwesomeIcon icon={faPen} /> Edit</button>;

    return (
      <>
      <NavBarContainer />
      <Modal userId={this.props.user.id} />
      <div className="user-banner">
        <div className="user-header-container">
          <img className="user-header-avatar" src={this.props.track.albumArt}/>
          <div className="user-header-content">
            <h1>{this.props.user.username}</h1>
            {hasName && this.renderSubtitle(this.props.user.firstname, this.props.user.lastname, " ")}
            {hasLocation && this.renderSubtitle(this.props.user.city, this.props.user.country, ", ")}
          </div>
        </div>
      </div>
      <div className="user-infobar">

      </div>
      <div className="content">
        <div className="content-main">
          <div className="user-uploads-container">
          </div>
        </div>
        <div className="content-sidebar">
          <div className="user-about">
            <div className="user-stats">

            </div>
            <div className="user-bio-container">
              <p className="user-bio">
                bio goes here
              </p>
            </div>
          </div>
          <footer className="content-footer">
            <Footer />
          </footer>
        </div>
      </div>
      </>
    )
  }
}

export default UserPage;

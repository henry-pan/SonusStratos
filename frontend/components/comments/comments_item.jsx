import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class CommentsItem extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteComment(this.props.comment.id);
  }

  isAuthor() {
    return this.props.currentUser.id === this.props.commenter.id;
  }

  isUploader() {
    return this.props.commenter.id === this.props.uploaderId;
  }

  isOwner() {
    return this.props.currentUser.id === this.props.uploaderId;
  }

  render() {
    if (!this.props.commenter) return null;

    let commentClass = "track-comments-item-container";
    let commentAuthor = <Link to={`/users/${this.props.commenter.id}`}>{this.props.commenter.username}</Link>;
    let commentButtons;

    if (this.isUploader()) commentClass += "-uploader";
    if (this.isAuthor()) commentAuthor = "You";
    if (this.isAuthor() || this.isOwner()) {
      commentButtons = <button className="track-action-button" onClick={this.handleDelete}><FontAwesomeIcon icon={faTrash} /></button>;
    }

    
    return (
      <div className={commentClass}>
        <img className="track-comments-item-avatar" src={this.props.commenter.profilePic} />
        <div className="track-comments-item-content">
          <span className="track-comments-item-author">{commentAuthor}</span>
          <p className="track-comments-item-body">{this.props.comment.comment_body}</p>
        </div>
        <div className="track-comments-item-meta">
          <span className="track-comments-posted">{this.props.comment.posted}</span>
          <div className="track-comments-buttons-container">
            {commentButtons}
          </div>
        </div>
      </div>
    )
  }
}

export default CommentsItem;

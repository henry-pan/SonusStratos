import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import CommentsItem from "./comments_item";

class Comments extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let commentValues = Object.values(this.props.comments);
    let commentsList = commentValues.map((comment, i) => (
      <li key={i}>
        <CommentsItem
        comment={comment}
        commenter={this.props.users[comment.commenter_id]}
        deleteComment={this.props.deleteComment} />
      </li>
    ));


    const emptyComments = (
      <div className="track-comments-empty">
        <div className="track-comments-empty-image"></div>
        <h3>Seems a little quiet over here</h3>
        <h4>Be the first to comment on this track</h4>
      </div>
    );

    if (commentValues.length === 0) return emptyComments;

    let plural = (commentValues.length === 1 ? "comment" : "comments");

    return (
      <div className="track-comments-container">
        <h3 className="track-comments-title"><FontAwesomeIcon icon={faCommentAlt} /> {commentValues.length} {plural}</h3>
        <ul className="track-comments-list">
          {commentsList}
        </ul>
      </div>
    );
  }

}

export default Comments;

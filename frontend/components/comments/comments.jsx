import React from "react";
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
        currentUserId={this.props.currentUser.id}
        comment={comment}
        commenter={this.props.users[comment.commenter_id]}
        deleteComment={this.props.deleteComment} />
      </li>
    ));

    let plural = (commentValues.length === 1 ? "comment" : "comments");

    return (
      <div>
        <p>{commentValues.length} {plural}</p>
        <ul>
          {commentsList}
        </ul>
      </div>
    );
  }

}

export default Comments;

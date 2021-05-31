import React from "react";

class Comments extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let commentValues = Object.values(this.props.comments);
    let commentsList = Object.values(this.props.comments).map((comment, i) => (
      <CommentsItem key={i}
      currentUserId={this.props.currentUser.id}
      comment={comment}
      commenter={this.props.users[comment.commenter_id]}
      deleteComment={this.props.deleteComment} />
    ));


    return (
      <div>
        <p>{commentValues.length} comments</p>
        <ul>
          {commentsList}
        </ul>
      </div>
    );
  }

}

export default Comments;

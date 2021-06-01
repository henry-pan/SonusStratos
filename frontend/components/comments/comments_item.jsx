import React from "react";

class CommentsItem extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteComment(this.props.comment.id);
  }

  render() {
    if (!this.props.commenter) return null;
    return(
      <div>
        {/* <img src={this.props.commenter.profilePic} />
        <p>{this.props.commenter.username}</p> */}
        <p>{this.props.comment.comment_body}</p>
        <p>{this.props.comment.posted}</p>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

export default CommentsItem;

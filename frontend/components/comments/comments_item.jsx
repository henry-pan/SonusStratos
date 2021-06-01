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
    return(
      <div>
        {/* <img src={this.props.commenter.profilePic} /> */}
        <p>
          {this.props.comment.comment_body}
          {this.props.comment.posted}
        </p>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

export default CommentsItem;

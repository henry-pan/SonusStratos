import React from "react";

class CommentsItem extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteComment(this.props.comment.id);
  }

  render() {
    <div>
      <p>
        {this.props.comment.comment_body}
      </p>
      <button onClick={this.handleDelete}>Delete</button>
    </div>
  }
}

export default CommentsItem;

import React from "react";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment_body: "",
      commenter_id: this.props.currentUser.id,
      track_id: this.props.trackId
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ comment_body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState({ comment_body: "" });
  }

  render() {
    return (
      <div>
        <img src={this.props.currentUser.profilePic} />
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Write a comment" value={this.state.comment_body} onChange={this.handleInput} />
        </form>
      </div>
    );
  }
}

export default CommentForm;

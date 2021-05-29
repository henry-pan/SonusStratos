import React from "react";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentBody: "",
      commenter: this.props.currentUser,
      track: this.props.trackId
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ commentBody: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState({ commentBody: "" });
  }

  render() {
    return (
      <div>
        <img src={this.props.currentUser.profilePic} />
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Write a comment" value={this.state.commentBody} onChange={this.handleInput} />
        </form>
      </div>
    );
  }
}

export default CommentForm;

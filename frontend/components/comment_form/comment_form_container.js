import { connect } from "react-redux";
import { createComment } from "../../actions/comment_actions";
import CommentForm from "./comment_form";

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  comments: state.entities.comments
});

const mapDispatchToProps = dispatch => ({
  createComment: track => dispatch(createComment(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);

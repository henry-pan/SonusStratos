import { connect } from "react-redux";
import { deleteComment } from "../../actions/comment_actions";
import Comments from "./comments";

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  comments: state.entities.comments,
  users: state.entities.users
});


const mapDispatchToProps = dispatch => ({
  deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);

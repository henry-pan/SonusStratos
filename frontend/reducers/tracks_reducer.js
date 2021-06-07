import { RECEIVE_TRACKS, RECEIVE_TRACK, REMOVE_TRACK } from "../actions/track_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_TRACKS:
      return Object.assign(nextState, action.tracks.tracks);
    case RECEIVE_TRACK:
      nextState[action.track.id] = action.track;
      return nextState;
    case REMOVE_TRACK:
      delete nextState[action.trackId];
      return nextState;
    case RECEIVE_USER:
      return Object.assign({}, action.user.tracks);
    default:
      return state;
  }
}

export default tracksReducer;

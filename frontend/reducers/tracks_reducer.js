import { RECEIVE_TRACKS, RECEIVE_TRACK, REMOVE_TRACK } from "../actions/track_actions";

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_TRACKS:
      const newState = {};
      action.tracks.forEach((track) => {
        newState[track.id] = track;
      });
      return newState;
    case RECEIVE_TRACK:
      nextState[action.track.id] = action.track;
      return nextState;
    case REMOVE_TRACK:
      delete nextState[action.trackId];
      return nextState;
    default:
      return state;
  }
}

export default tracksReducer;

import { RECEIVE_PLAY_TRACK, PLAY_TRACK, PAUSE_TRACK } from "../actions/play_actions";

const _nullPlaying = {
  track: null,
  isPlaying: false
}

const playbarReducer = (state = _nullPlaying, action) => {
  Object.freeze(state);
  const nextState =  Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_PLAY_TRACK:
      return Object.assign({}, state, { track: action.track });
    case PLAY_TRACK:
      nextState["isPlaying"] = true;
      return nextState;
    case PAUSE_TRACK:
      nextState["isPlaying"] = false;
      return nextState;
    default:
      return state;
  }
}

export default playbarReducer;
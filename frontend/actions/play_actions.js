export const RECEIVE_PLAY_TRACK = 'RECEIVE_PLAY_TRACK';
export const PLAY_TRACK = 'PLAY_TRACK';
export const PAUSE_TRACK = 'PAUSE_TRACK';

export const receivePlayTrack = trackId => ({
  type: RECEIVE_PLAY_TRACK,
  trackId
});

export const playTrack = () => ({
  type: PLAY_TRACK
});

export const pauseTrack = () => ({
  type: PAUSE_TRACK
});

import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    isPlaying: false,
    repeatMode: 'no-repeat',
  },
  reducers: {
    togglePlayPause: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    setPlayingState: (state, action) => {
      state.isPlaying = action.payload;
    },
    setRepeatMode: (state, action) => {
      state.repeatMode = action.payload;
    },
  },
});

export const { togglePlayPause, setPlayingState, setRepeatMode } =
  playerSlice.actions;

export default playerSlice.reducer;

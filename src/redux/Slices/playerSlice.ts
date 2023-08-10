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
    setRepeatMode: (state, action) => {
      state.repeatMode = action.payload;
    },
  },
});

export const { togglePlayPause, setRepeatMode } = playerSlice.actions;

export default playerSlice.reducer;

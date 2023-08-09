import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './Slices/PlayerSlice';
import dropReducer from './Slices/dropSlice';

const store = configureStore({
  reducer: {
    player: playerReducer,
    drop: dropReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

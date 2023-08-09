import { createSlice } from '@reduxjs/toolkit';

const dropSlice = createSlice({
  name: 'drop',
  initialState: {
    selectedFile: null as File | null,
  },
  reducers: {
    setSelectedFile: (state, action) => {
      state.selectedFile = action.payload;
    },
  },
});

export const { setSelectedFile } = dropSlice.actions;

export default dropSlice.reducer;

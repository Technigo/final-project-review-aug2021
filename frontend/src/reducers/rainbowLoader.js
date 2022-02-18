import { createSlice } from '@reduxjs/toolkit';

//slice to handle the loading. Can probably be put in to another reducer.
export const rainbowLoader = createSlice({
  name: 'rainbowLoader',
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export default rainbowLoader;

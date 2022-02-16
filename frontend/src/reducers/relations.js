import { createSlice } from '@reduxjs/toolkit';

export const relations = createSlice({
  name: 'relations',
  initialState: {
    relations: []
  },
  reducers: {
    setRelations: (store, action) => {
      store.relations = action.payload;
    }
  }
});

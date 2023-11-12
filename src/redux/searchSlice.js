import { createSlice } from '@reduxjs/toolkit';

const SearchInitialState = {
  query: '',
  resetBoolean: false,
  value: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState: SearchInitialState,
  reducers: {
    setQuerySearch(state, action) {
      state.query = action.payload;
      state.resetBoolean = true;
    },
  },
});

export const searchSliceReducer = searchSlice.reducer;
export const { setQuerySearch } = searchSlice.actions;

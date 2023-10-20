import { createSlice } from '@reduxjs/toolkit';

const SearchInitialState = {
  query: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState: SearchInitialState,
  reducers: {
    setValueSearch(state, action) {
      state.query = action.payload;
    },
  },
});

export const searchSliceReducer = searchSlice.reducer;
export const { setValueSearch } = searchSlice.actions;

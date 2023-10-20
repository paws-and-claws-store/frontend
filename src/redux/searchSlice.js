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

    resetValueSearch(state) {
      state.query = '';
    },
  },
});

export const searchSliceReducer = searchSlice.reducer;
export const { setValueSearch, resetValueSearch } = searchSlice.actions;

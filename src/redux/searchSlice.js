import { createSlice } from '@reduxjs/toolkit';

const SearchInitialState = {
  query: '',
  resetBoolean: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState: SearchInitialState,
  reducers: {
    setValueSearch(state, action) {
      state.query = action.payload;
      state.resetBoolean = true;
    },

    resetValueSearch(state) {
      state.query = '';
      state.resetBoolean = false;
    },
    setResetBoolean(state, action) {
      state.resetBoolean = action.payload;
    },
  },
});

export const searchSliceReducer = searchSlice.reducer;
export const { setValueSearch, resetValueSearch, setResetBoolean } = searchSlice.actions;

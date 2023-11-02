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
    setValueSearch(state, action) {
      state.value = action.payload;
      state.resetBoolean = true;
    },

    setResetValueSearch(state) {
      state.value = '';
      state.resetBoolean = false;
    },
    setResetBoolean(state, action) {
      state.resetBoolean = action.payload;
    },
  },
});

export const searchSliceReducer = searchSlice.reducer;
export const { setQuerySearch, setResetBoolean, setValueSearch, setResetValueSearch } =
  searchSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

const SearchInitialState = {
  query: '',
  resetBoolean: false,
  value: '',
  status: 'rejected',
};

const searchSlice = createSlice({
  name: 'search',
  initialState: SearchInitialState,
  reducers: {
    setQuerySearch(state, action) {
      state.query = action.payload;
      state.resetBoolean = true;
    },

    setValueSearchStatusRedux(state, action) {
      state.status = action.payload;
    },
  },
});

export const searchSliceReducer = searchSlice.reducer;
export const { setQuerySearch, setValueSearchStatusRedux } = searchSlice.actions;

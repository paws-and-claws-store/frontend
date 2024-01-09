import { createSlice } from '@reduxjs/toolkit';

const SortingInitialState = {
  type: '', // current type of sorting
  defaultType: 'discounts', // set default type for first render
};

SortingInitialState.type = SortingInitialState.defaultType;

const sortSelectSlice = createSlice({
  name: 'sorting',
  initialState: SortingInitialState,
  reducers: {
    setValueSort(state, action) {
      state.type = action.payload;
    },
  },
});

export const searchSelectReducer = sortSelectSlice.reducer;
export const { setValueSort } = sortSelectSlice.actions;

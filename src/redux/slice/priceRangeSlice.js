import { createSlice } from '@reduxjs/toolkit';

const PriceRangeInitialState = {
  minPriceRange: 0,
  maxPriceRange: 10000,
  value: [],
  isPriceRangeSet: false,
};
// PriceRangeInitialState.minPriceValue = PriceRangeInitialState.minPriceRange;
// PriceRangeInitialState.maxPriceValue = PriceRangeInitialState.maxPriceRange;
PriceRangeInitialState.value.push(PriceRangeInitialState.minPriceRange);
PriceRangeInitialState.value.push(PriceRangeInitialState.maxPriceRange);

const PriceRangeInitialStateModified = PriceRangeInitialState;

const priceRangeSlice = createSlice({
  name: 'priceRange',
  initialState: PriceRangeInitialState,
  reducers: {
    setMinPriceRange(state, action) {
      state.minPriceRange = action.payload;
    },
    setMaxPriceRange(state, action) {
      state.maxPriceRange = action.payload;
    },
    setPriceValue(state, action) {
      state.value = action.payload;
    },
    setPriceChange(state, action) {
      state.isPriceRangeSet = action.payload;
    },
    resetPriceRange(state, action) {
      state.value = PriceRangeInitialStateModified.value;
      state.isPriceRangeSet = PriceRangeInitialStateModified.isPriceRangeSet;
      state.minPriceRange = PriceRangeInitialStateModified.minPriceRange;
      state.maxPriceRange = PriceRangeInitialStateModified.maxPriceRange;
    },
  },
});

export const priceRangeReducer = priceRangeSlice.reducer;
export const {
  setMinPriceRange,
  setMaxPriceRange,
  setPriceValue,
  setPriceChange,
  resetPriceRange,
} = priceRangeSlice.actions;

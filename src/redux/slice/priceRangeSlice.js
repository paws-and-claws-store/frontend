import { createSlice } from '@reduxjs/toolkit';

const PriceRangeInitialState = {
  minPriceRange: 0,
  maxPriceRange: 10000,
  value: [],
  isPriceRangeSet: false,
  isClearSet: false,
};

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
      state.isPriceRangeSet = true;
    },
    setPriceChange(state, action) {
      state.isPriceRangeSet = action.payload;
    },
    resetPriceRange(state, action) {
      state.value = PriceRangeInitialStateModified.value;
      state.isPriceRangeSet = PriceRangeInitialStateModified.isPriceRangeSet;
      state.minPriceRange = PriceRangeInitialStateModified.minPriceRange;
      state.maxPriceRange = PriceRangeInitialStateModified.maxPriceRange;
      state.isClearSet = false;
      state.isPriceRangeSet = false;
    },
    setClearSetStatusPriceRange(state, action) {
      state.isClearSet = action.payload;
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
  setClearSetStatusPriceRange,
} = priceRangeSlice.actions;

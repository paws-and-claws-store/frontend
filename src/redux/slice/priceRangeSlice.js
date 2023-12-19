import { createSlice } from '@reduxjs/toolkit';

const PriceRangeInitialState = {
  value: [],
  isPriceRangeSet: false,
  isClearSet: false,
  defaultPriceRange: [0, 1000000],
};

PriceRangeInitialState.value = PriceRangeInitialState.defaultPriceRange; // set default data to value
const PriceRangeInitialStateModified = PriceRangeInitialState;

const priceRangeSlice = createSlice({
  name: 'priceRange',
  initialState: PriceRangeInitialState,
  reducers: {
    setPriceValue(state, action) {
      state.value = action.payload;
      state.isPriceRangeSet = true;
    },
    setPriceChange(state, action) {
      state.isPriceRangeSet = action.payload;
    },
    resetPriceRange(state, action) {
      state.value = PriceRangeInitialStateModified.value;
      state.isClearSet = false;
      state.isPriceRangeSet = false;
    },
    setClearSetStatusPriceRange(state, action) {
      state.isClearSet = action.payload;
    },
    setDefaultPriceRange(state, action) {
      state.defaultPriceRange = action.payload;
    },
  },
});

export const priceRangeReducer = priceRangeSlice.reducer;
export const {
  setPriceValue,
  setPriceChange,
  resetPriceRange,
  setClearSetStatusPriceRange,
  setDefaultPriceRange,
} = priceRangeSlice.actions;

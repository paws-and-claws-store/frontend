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
  },
});

export const priceRangeReducer = priceRangeSlice.reducer;
export const { setMinPriceRange, setMaxPriceRange, setPriceValue, setPriceChange } =
  priceRangeSlice.actions;

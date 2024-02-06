import { createSlice } from '@reduxjs/toolkit';

const brandsFilterInitialState = {
  brands: '',
  isBrandsSet: false,
  isClearSet: false,
  checkboxStates: {},
  checkedBrands: [],
  defaultBrands: '',
};

brandsFilterInitialState.defaultBrands = brandsFilterInitialState.brands;

const brandFilterSlice = createSlice({
  name: 'brands',
  initialState: brandsFilterInitialState,
  reducers: {
    setBrandsSet(state, action) {
      state.isBrandsSet = action.payload;
    },
    setClearSetStatusBrandsFilter(state, action) {
      state.isClearSet = action.payload;
    },
    setDefaultBrands(state, action) {
      state.defaultBrands = action.payload;
    },
  },
});

export const brandsFilterReducer = brandFilterSlice.reducer;

export const { setBrandsSet, setClearSetStatusBrandsFilter, setDefaultBrands } =
  brandFilterSlice.actions;

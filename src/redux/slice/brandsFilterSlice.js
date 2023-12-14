import { createSlice } from '@reduxjs/toolkit';

const brandsFilterInitialState = {
  brands: '',
  isBrandsSet: false,
  isClearSet: false,
};

const brandFilterSlice = createSlice({
  name: 'brands',
  initialState: brandsFilterInitialState,
  reducers: {
    setBrands(state, action) {
      state.brands = action.payload;
      state.isBrandsSet = true;
    },
    setBrandsSet(state, action) {
      state.isBrandsSet = action.payload;
    },
    setResetBrands(state, action) {
      state.brands = undefined;
      state.isBrandsSet = false;
      state.isClearSet = false;
    },
    setClearSetStatus(state, action) {
      state.isClearSet = action.payload;
    },
  },
});

export const brandsFilterReducer = brandFilterSlice.reducer;

export const { setBrands, setBrandsSet, setClearSetStatus, setResetBrands } =
  brandFilterSlice.actions;

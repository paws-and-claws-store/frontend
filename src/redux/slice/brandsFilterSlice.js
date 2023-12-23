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
    setBrands(state, action) {
      const updatedBrands = new Set(state.checkedBrands);
      if (action.payload.checked) {
        updatedBrands.add(action.payload.name);
      } else {
        updatedBrands.delete(action.payload.name);
      }

      state.checkedBrands = [...updatedBrands];
      state.brands = state.checkedBrands.toString();
      state.checkboxStates = {
        ...state.checkboxStates,
        [action.payload.name]: action.payload.checked,
      };
      state.isBrandsSet = true;
    },
    setBrandsSet(state, action) {
      state.isBrandsSet = action.payload;
    },
    setResetBrands(state, action) {
      state.brands = '';
      state.isBrandsSet = false;
      state.isClearSet = false;
      state.checkedBrands = [];
      state.checkboxStates = {};
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

export const {
  setBrands,
  setBrandsSet,
  setClearSetStatusBrandsFilter,
  setResetBrands,
  setDefaultBrands,
} = brandFilterSlice.actions;

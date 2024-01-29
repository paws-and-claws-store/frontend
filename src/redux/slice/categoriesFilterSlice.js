import { createSlice } from '@reduxjs/toolkit';
const categoriesInitialState = {
  categories: [],
  checkboxStates: {},
  checkedCategories: [],
  isCategoriesSet: false,
  isClearSet: false,
};

const categoriesFilterSlice = createSlice({
  name: 'categories',
  initialState: categoriesInitialState,
  reducers: {
    setCategoriesDefault: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const categoriesFilterReducer = categoriesFilterSlice.reducer;
export const { setCategoriesDefault } = categoriesFilterSlice.actions;

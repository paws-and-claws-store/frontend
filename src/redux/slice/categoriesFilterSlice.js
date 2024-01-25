import { createSlice } from '@reduxjs/toolkit';
const categoriesInitialState = {
  categories: [],
};

const categoriesFilterSlice = createSlice({
  name: 'categories',
  initialState: categoriesInitialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const categoriesFilterReducer = categoriesFilterSlice.reducer;
export const { setCategories } = categoriesFilterSlice.actions;

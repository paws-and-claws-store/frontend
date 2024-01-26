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
    setCategories: (state, action) => {
      const updatedCategories = new Set(state.checkedCategories);
      if (action.payload.checked) {
        updatedCategories.add(action.payload.name);
      } else {
        updatedCategories.delete(action.payload.name);
      }

      state.checkedCategories = [...updatedCategories];
      state.brands = state.checkedCategories.toString();
      state.checkboxStates = {
        ...state.checkboxStates,
        [action.payload.name]: action.payload.checked,
      };
      state.isCategoriesSet = true;
    },
  },
});

export const categoriesFilterReducer = categoriesFilterSlice.reducer;
export const { setCategories, setCategoriesDefault } = categoriesFilterSlice.actions;

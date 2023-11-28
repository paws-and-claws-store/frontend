import { createSlice } from '@reduxjs/toolkit';

const viewedProductsInitialState = {
  viewedList: [],
};

const viewedProductsSlice = createSlice({
  name: 'viewedProducts',
  initialState: viewedProductsInitialState,
  reducers: {
    setViewedProducts(state, { payload }) {
      
      const findEl = state.viewedList.some(el => el._id === payload._id);

      if (findEl && state.viewedList.length > 0) {
        state.viewedList=state.viewedList.filter(el => el._id !== payload._id);
        state.viewedList.unshift(payload);
        
      }else
      {state.viewedList.unshift(payload);}
    },
  },
});

export const viewedProductsReducer = viewedProductsSlice.reducer;
export const { setViewedProducts } = viewedProductsSlice.actions;

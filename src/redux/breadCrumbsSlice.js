import { createSlice } from '@reduxjs/toolkit';

const breadCrumbsInitialState = {
  breadcrumbs: [],
};

const breadCrumbsSlice = createSlice({
  name: 'breadcrumbs',
  initialState: breadCrumbsInitialState,
  reducers: {
    setBreadCrumbs(state, action) {
      const dirtyArray = [...state.breadcrumbs, ...action.payload];
      const uniqueObjArray = [...new Map(dirtyArray.map(item => [item['_id'], item])).values()];

      state.breadcrumbs = uniqueObjArray;
    },
    updateBreadCrumbs(state, action) {
      //   state.cartObject[action.payload[0]] = action.payload[1];
    },
  },
});

export const breadCrumbsReducer = breadCrumbsSlice.reducer;
export const { setBreadCrumbs } = breadCrumbsSlice.actions;

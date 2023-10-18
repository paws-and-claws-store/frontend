import { createSlice } from '@reduxjs/toolkit';

const breadCrumbsInitialState = {
  breadcrumbs: [
    { _id: 'catalog', ua: 'Каталог', en: 'Catalog' },
    { _id: 'prices-drop', ua: 'Акції', en: 'Promotion' },
    { _id: 'brands', ua: 'Бренди', en: 'Brands' },
    { _id: 'aboutUs', ua: 'Про компанію', en: 'About Us' },
    { _id: 'contacts', ua: 'Контакти', en: 'Contacts' },
  ],
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

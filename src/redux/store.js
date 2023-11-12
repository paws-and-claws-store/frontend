import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/es/storage/session';
import {
  persistStore,
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from 'redux-persist';

import { cartReducer } from './cartSlice';
import { api } from './operations';
import { breadCrumbsReducer } from './breadCrumbsSlice';
import { searchSliceReducer } from './searchSlice';
import { searchSelectReducer } from './sortSelectSlice';
import { viewedProductsReducer } from './viewedProductsSlice';

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  cart: cartReducer,
  breadcrumbs: breadCrumbsReducer,
  search: searchSliceReducer,
  sorting: searchSelectReducer,
  viewedProducts: viewedProductsReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,


  whitelist: ['cart', 'breadcrumbs', 'viewedProducts'],

  storage: sessionStorage, // to use loacalstorage only in one session


};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
      serializableCheck: false,
    }).concat(api.middleware),
});

export let persistor = persistStore(store);

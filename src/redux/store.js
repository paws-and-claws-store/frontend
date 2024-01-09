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

import storage from 'redux-persist/lib/storage';

import { cartReducer } from './slice/cartSlice';
import { api } from './api/operations';
import { breadCrumbsReducer } from './slice/breadCrumbsSlice';
import { searchSliceReducer } from './slice/searchSlice';
import { searchSelectReducer } from './slice/sortSelectSlice';
import { viewedProductsReducer } from './slice/viewedProductsSlice';
import { priceRangeReducer } from './slice/priceRangeSlice';
import { authReducer } from './slice/authSlice';
import { brandsFilterReducer } from './slice/brandsFilterSlice';

const persistedAuthReducer = persistReducer(
  {
    key: 'auth',
    storage,
    whitelist: ['isRegistered', 'isLoggedIn'],
  },
  authReducer,
);

const persistConfig = {
  key: 'root',
  version: 1,
  whitelist: ['cart', 'breadcrumbs', 'viewedProducts'],

  storage: sessionStorage, // to use loacalstorage only in one session
};

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: persistedAuthReducer,
  cart: cartReducer,
  breadcrumbs: breadCrumbsReducer,
  search: searchSliceReducer,
  sorting: searchSelectReducer,
  viewedProducts: viewedProductsReducer,
  priceRange: priceRangeReducer,
  brandsFilter: brandsFilterReducer,
});

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

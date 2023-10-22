import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { cartReducer } from './cartSlice';
import { api } from './operations';
import { breadCrumbsReducer } from './breadCrumbsSlice';
import { searchSliceReducer } from './searchSlice';

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  cart: cartReducer,
  breadcrumbs: breadCrumbsReducer,
  search: searchSliceReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['cart', 'breadcrumbs', 'search'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

export let persistor = persistStore(store);

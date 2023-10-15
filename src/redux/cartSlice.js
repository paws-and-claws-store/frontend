import { createSlice } from '@reduxjs/toolkit';

const cartInitialState = {
  cartObject: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    setCartItems(state, action) {
      state.cartObject[action.payload[0]] = action.payload[1];
    },
    updateCartItems(state, action) {
      state.cartObject[action.payload[0]] = action.payload[1];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { setCartItems } = cartSlice.actions;

// import { createSlice } from '@reduxjs/toolkit';

// const cartInitialState = {
//   cartObject: {},
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: cartInitialState,
//   reducers: {
//     setCartItems(state, action) {
//       state.cartObject[action.payload[0]] = action.payload[1];
//     },
//     updateCartItems(state, action) {
//       state.cartObject[action.payload[0]] = action.payload[1];
//     },
//   },
// });

// export const cartReducer = cartSlice.reducer;
// export const { setCartItems } = cartSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

const cartInitialState = {
  cartItems: [], // Масив, де кожен елемент - об'єкт товару
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addCartItem(state, action) {
      const productObj = action.payload;
      state.cartItems.push(productObj);
    },
    updateCartItem(state, action) {
      const { productCode, newCount } = action.payload;
      const index = state.cartItems.findIndex(
        item => item.productCode === productCode,
      );
      if (index !== -1) {
        state.cartItems[index].cardCount = newCount;
      }
    },
    removeCartItem(state, action) {
      const productCode = action.payload;
      state.cartItems = state.cartItems.filter(
        item => item.productCode !== productCode,
      );
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addCartItem, updateCartItem, removeCartItem } =
  cartSlice.actions;

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
    // updateCartItemCount(state, action) {
    //   const { productCode, count } = action.payload;
    //   console.log('action.payload:', action.payload);
    //   console.log('count:', count);
    //   const index = state.cartItems.findIndex(item => {
    //     return item.productCode === productCode;
    //   });
    //   if (index !== -1) {
    //     // state.cartItems[index].count = newCount;
    //     console.log(
    //       'state.cartItems[index].count:',
    //       state.cartItems[index].count,
    //     );
    //   }
    //   // return { ...state }; // Повернення оновленого стану
    // },

    updateCartItemCount(state, action) {
      const { payload } = action;
      for (const item of payload) {
        const index = state.cartItems.findIndex(
          i => i.productCode === item.productCode,
        );
        if (index !== -1) {
          state.cartItems[index].count = item.count;
        }
      }
      return state;
    },

    removeCartItem(state, action) {
      const productCode = action.payload;
      state.cartItems = state.cartItems.filter(
        item => item.productCode !== productCode,
      );
    },
    clearCartItems(state) {
      state.cartItems = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addCartItem,
  updateCartItem,
  removeCartItem,
  clearCartItems,
  updateCartItemCount,
} = cartSlice.actions;

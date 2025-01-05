import {PayloadAction, createSelector, createSlice} from '@reduxjs/toolkit';
import {RootState} from '@store/store';

export interface CartItem {
  id: string;
  name: string;
  quantity?: number;
}

interface CartT {
  cart: CartItem[];
}

const initialState: CartT = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, {payload}: PayloadAction<CartItem>) => {
      let count = 0;
      state.cart.map(item => {
        if (item.id === payload.id) {
          count += 1;
          state.cart = [...state.cart, {...item, quantity: count}];
        } else state.cart = [...state.cart, payload];
      });
    },
    removeItemFromCart: (state, {payload}: PayloadAction<string>) => {
      state.cart = state.cart.filter(item => item.id !== payload);
    },
    emptyCart: state => {
      state.cart = initialState.cart;
    },
  },
});

export const {addItemToCart, emptyCart, removeItemFromCart} = cartSlice.actions;

export const getCartState = createSelector(
  (state: RootState) => state,
  ({cart}) => cart,
);

export default cartSlice.reducer;

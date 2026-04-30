import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload.product;
      const quantity = action.payload.quantity || 1;
      const existing = state.cartItems.find(item => item.id === product.id);

      if (existing) {
        existing.quantity += quantity;
      } else {
        state.cartItems.push({ ...product, quantity });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartCount = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotal = (state) =>
  state.cart.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

export default cartSlice.reducer;

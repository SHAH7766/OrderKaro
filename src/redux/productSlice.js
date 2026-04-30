import { createSlice } from '@reduxjs/toolkit';

/**
 * Stores the product the user clicked on before navigating to /product.
 * This replaces react-router's location.state which doesn't exist in Next.js.
 */
const initialState = {
  selectedProduct: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setSelectedProduct } = productSlice.actions;
export const selectSelectedProduct = (state) => state.product.selectedProduct;

export default productSlice.reducer;

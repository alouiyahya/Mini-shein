import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.items.find((item) => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // 1. ZID HAD L-REDUCER HNA
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

// 2. DAROURI T-ZID removeItem HNA BACH T-EXPORTA
export const { addToCart, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
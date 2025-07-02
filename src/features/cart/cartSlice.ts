import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProductType {
  category: string;
  name: string;
  detail: string;
  price: number;
  type: string;
}

export type CartItem = {
  product: ProductType;
  quantity: number;
};

type ProductState = {
  products: CartItem[];
};

const initialState: ProductState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { product, quantity } = action.payload;
      const exist = state.products.find((p) => p.product.name == product.name);
      if (exist) {
        exist.quantity = quantity;
      } else {
        state.products.push({ product, quantity });
      }
    },

    removeItem: (state, action: PayloadAction<CartItem>) => {
      state.products = state.products.filter(
        (p) => p.product.name != action.payload.product.name
      );
    },
    pQuantityIncrementWithOne: (state, action: PayloadAction<CartItem>) => {
      const { product, quantity } = action.payload;
      const exist = state.products.find((p) => p.product.name == product.name);
      if (exist) {
        exist.quantity += 1;
      }
    },
    pQuantityDecrementWithOne: (state, action: PayloadAction<CartItem>) => {
      const { product, quantity } = action.payload;
      const exist = state.products.find((p) => p.product.name == product.name);
      if (exist) {
        exist.quantity -= 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeItem,
  pQuantityIncrementWithOne,
  pQuantityDecrementWithOne,
} = cartSlice.actions;
export default cartSlice.reducer;

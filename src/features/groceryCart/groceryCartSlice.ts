import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GroceryProductType {
  name: string;
  brands: {
    name: string;
    weight: string;
    price: number;
  };
}

export type GroceryCartItem = {
  groceryProduct: GroceryProductType;
  quantity: number;
};

type ProductState = {
  groceryProducts: GroceryCartItem[];
};

const initialState: ProductState = {
  groceryProducts: [],
};

export const groceryCartSlice = createSlice({
  name: "groceryCart",
  initialState,
  reducers: {
    addToGroceryCart: (state, action: PayloadAction<GroceryCartItem>) => {
      const { groceryProduct, quantity } = action.payload;
      const findIfExist = state.groceryProducts.find(
        (p) =>
          p.groceryProduct.name == groceryProduct.name &&
          p.groceryProduct.brands.name == groceryProduct.brands.name
      );
      if (findIfExist) {
        findIfExist.quantity += quantity;
      } else {
        state.groceryProducts.push(action.payload);
      }
    },

    removeGroceryItem: (state, action: PayloadAction<GroceryCartItem>) => {
      const { groceryProduct } = action.payload;

      state.groceryProducts = state.groceryProducts.filter(
        (p) =>
          !(
            p.groceryProduct.name == groceryProduct.name &&
            p.groceryProduct.brands.name == groceryProduct.brands.name
          )
      );
    },
    quantityIncrementWithOne: (
      state,
      action: PayloadAction<GroceryCartItem>
    ) => {
      const { groceryProduct, quantity } = action.payload;
      const groceryProductInCart = state.groceryProducts.find(
        (p) =>
          p.groceryProduct.name == groceryProduct.name &&
          p.groceryProduct.brands.name == groceryProduct.brands.name
      );
      if (groceryProductInCart) {
        groceryProductInCart.quantity += 1;
      }
    },
    quantityDecrementWithOne: (
      state,
      action: PayloadAction<GroceryCartItem>
    ) => {
      const { groceryProduct, quantity } = action.payload;
      const groceryProductInCart = state.groceryProducts.find(
        (p) =>
          p.groceryProduct.name == groceryProduct.name &&
          p.groceryProduct.brands.name == groceryProduct.brands.name
      );
      if (groceryProductInCart) {
        groceryProductInCart.quantity -= 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToGroceryCart,
  removeGroceryItem,
  quantityIncrementWithOne,
  quantityDecrementWithOne,
} = groceryCartSlice.actions;
export default groceryCartSlice.reducer;

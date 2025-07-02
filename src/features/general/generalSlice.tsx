import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../cart/cartSlice";

type GeneralState = {
  timeSlot: string | null;
  startOrder: boolean;
  productBox: boolean;
  deliveryType: string;
  cartBox: boolean;
  product: ProductType | null;
  signInToUs: boolean;
  registerInToUs: boolean;
  groceryCart: boolean;
};

const initialState: GeneralState = {
  timeSlot: null,
  startOrder: false,
  productBox: false,
  deliveryType: "Pick Up",
  cartBox: false,
  product: null,
  signInToUs: false,
  registerInToUs: false,
  groceryCart: false,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setOrderTimeSlot: (state, actions: PayloadAction<string>) => {
      state.timeSlot = actions.payload;
    },
    openStartOrder: (state) => {
      state.startOrder = !state.startOrder;
    },
    closeStartOrder: (state) => {
      state.startOrder = !state.startOrder;
    },
    openProductBox: (state) => {
      state.productBox = !state.productBox;
    },
    closeProductBox: (state) => {
      state.productBox = !state.productBox;
    },
    setDeliveryTypeToDelivery: (state) => {
      state.deliveryType = "Delivery";
    },
    setDeliveryTypeToPickUp: (state) => {
      state.deliveryType = "Pick Up";
    },
    openCartBox: (state) => {
      state.cartBox = !state.cartBox;
    },
    closeCartBox: (state) => {
      state.cartBox = !state.cartBox;
    },
    setProduct: (state, actions: PayloadAction<ProductType>) => {
      state.product = actions.payload;
    },
    setProductToNull: (state) => {
      state.product = null;
    },

    // signin
    openSignInToUsBox: (state) => {
      state.signInToUs = true;
    },
    closeSignInToUsBox: (state) => {
      state.signInToUs = false;
    },
    // re3gister
    openRegisterInToUsBox: (state) => {
      state.registerInToUs = true;
    },
    closeRegisterInToUsBox: (state) => {
      state.registerInToUs = false;
    },

    // grocery cart open close
    openGrocerycart: (state) => {
      state.groceryCart = true;
    },
    closeGroceryCart: (state) => {
      state.groceryCart = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setOrderTimeSlot,
  openStartOrder,
  closeStartOrder,
  openProductBox,
  closeProductBox,
  setDeliveryTypeToDelivery,
  setDeliveryTypeToPickUp,
  openCartBox,
  closeCartBox,
  setProduct,
  setProductToNull,
  openSignInToUsBox,
  closeSignInToUsBox,
  openRegisterInToUsBox,
  closeRegisterInToUsBox,
  openGrocerycart,
  closeGroceryCart,
} = generalSlice.actions;
export default generalSlice.reducer;

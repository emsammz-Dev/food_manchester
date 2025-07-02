import { configureStore } from "@reduxjs/toolkit";
//import counter reducer
import counterReducer from "../features/counter/counterSlice";
import generalSlice from "../features/general/generalSlice";
import cartReducer from "../features/cart/cartSlice";
import groceryCartSlice from "@/features/groceryCart/groceryCartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    general: generalSlice,
    groceryCart: groceryCartSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

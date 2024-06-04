import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/api";
import cartReducer from "../slices/cartSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cart: cartReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

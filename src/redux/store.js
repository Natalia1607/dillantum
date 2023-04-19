import { configureStore } from "@reduxjs/toolkit";
import { bayutApi } from "./services/bayut";

const store = configureStore({
  reducer: {
    [bayutApi.reducerPath]: bayutApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      bayutApi.middleware,
    ),
});

export default store;

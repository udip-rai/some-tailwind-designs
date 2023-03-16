import { configureStore } from "@reduxjs/toolkit";
import viewOrdersReducer from "redux/features/createViewOrdersSlice";

export const store = configureStore({
  reducer: {
    viewOrders: viewOrdersReducer,
  },
});

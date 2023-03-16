import { createSlice } from "@reduxjs/toolkit";
import viewOrdersJson from "data/view-orders.json";

const initialState = {
  viewOrders: [],
  items: viewOrdersJson,
};

export const createViewOrdersSlice = createSlice({
  name: "viewOrders",
  initialState,
  reducers: {},
});

export default createViewOrdersSlice.reducer;

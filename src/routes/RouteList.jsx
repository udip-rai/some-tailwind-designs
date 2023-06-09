import React from "react";
import { IndexPage, OrderManagementPage, ViewOrdersPage } from "pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout1 } from "layouts";

export const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout1 />}>
          <Route index element={<IndexPage />} />
          <Route path="order-manage" element={<OrderManagementPage />} />
          <Route path="view-order" element={<ViewOrdersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

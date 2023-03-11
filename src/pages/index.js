import React from "react";

// Exports
export { OrderManagementPage } from "./OrderManagementPage";

export const IndexPage = () => {
  return (
    <div className="w-full h-full px-10">
      <h2 className="text-red-600 dark:text-red-300 font-bold italic text-3xl py-3">Designs so far..</h2>
      <ul className="list-decimal">
        <li className="hover:text-blue-500 ease-in-out duration-200"><a href="order-manage">Order Management</a></li>
      </ul>
    </div>
  );
};

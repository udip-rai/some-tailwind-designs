import React from "react";
import { Outlet } from "react-router-dom";
import { Footer1 } from "./Footer1";
import { Header1 } from "./Header1";

export const Layout1 = () => {
  return (
    <>
      <Header1 />

      <main className="h-[calc(100vh-150px)]">
        <Outlet />
      </main>

      <Footer1 />
    </>
  );
};

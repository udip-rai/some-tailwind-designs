import React from "react";
import { Outlet } from "react-router-dom";
import { Footer1 } from "./Footer1";
import { Header1 } from "./Header1";

export const Layout1 = () => {
  return (
    <>
      <Header1 />

      <main className="min-h-[calc(100vh-140px)] h-[calc(100%-140px)]">
        <Outlet />
      </main>

      <Footer1 />
    </>
  );
};

import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "./header";
import Header from "../../Pages/Header/Header"

import Footer from "../../Pages/Footer/Footer";

function SharedLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default SharedLayout;

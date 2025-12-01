import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import useTheme from "../../hooks/useTheme";
import { Outlet } from "react-router";

function Layout() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "dark-mode" : ""}>
        <Header />
        <Banner />
        <Outlet />
        <Footer />
    </div>
  );
}

export default Layout;

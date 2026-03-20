import React from "react";
import NavBar from "./NavBar";
import SubNav from "./SubNav";
import { Outlet } from "react-router-dom";

const Layout = ({ search, setSearch }) => {
  return (
    <>
      <NavBar search={search} setSearch={setSearch} />
      <SubNav />
      <Outlet />
    </>
  );
};

export default Layout;

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";
import "./style.scss";

function Layout(props) {
  return (
    <>
      <Header images={props.images} />
      <Outlet />
    </>
  );
}

export default React.memo(Layout);

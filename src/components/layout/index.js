import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";
import "./style.scss";
import "normalize.css";

function Layout(props) {
  return (
    <>
      <Header images={props.images} />
      <Outlet />
    </>
  );
}

export default React.memo(Layout);

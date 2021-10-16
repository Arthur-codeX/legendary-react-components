import React from "react";

import { useSelector } from "react-redux";

import Dash from "../main/Dash";
import TopBarPage from "./TopBar";
import ErrorPage from "./ErrorPage";
const Switch = () => {
  let cPage = useSelector((state) => state.currentPage);
  console.log(cPage);
  if (cPage === "DashPage") return <Dash />;
  if (cPage === "TopBarPage") return <TopBarPage />;
  return <ErrorPage />;
};

export default Switch;

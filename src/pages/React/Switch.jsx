import React from "react";

import { useSelector } from "react-redux";
import Home from "./Dash/Home";
import ReduxEx from "./Dash/Redux";

const Switch = () => {
  var module = useSelector((store) => store.react.currentModule);
  if (module === "Home") return <Home />;
  if (module === "Redux") return <ReduxEx />;
  return null;
};

export default Switch;

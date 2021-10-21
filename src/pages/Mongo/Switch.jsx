import React from "react";
import { useSelector } from "react-redux";

import Home from "./Dash/Home";
import Connection from "./Dash/Connection";
import Model from "./Dash/Model";
const Switch = () => {
  var module = useSelector((store) => store.mongo.currentModule);
  console.log(module);
  if (module === "Home") return <Home />;
  if (module === "Connection") return <Connection />;
  if (module === "Model") return <Model />;
  return null;
};

export default Switch;

import React from "react";
import { useSelector } from "react-redux";

import Home from "./Dash/home";
import Server from "./Dash/Server";
import DotEnv from "./Dash/DotEnv";

const Switch = () => {
  var module = useSelector((store) => store.express.currentModule);
  console.log(module);
  if (module === "Home") return <Home />;
  if (module === "Server") return <Server />;
  if (module === "DotEnv") return <DotEnv />;
  return null;
};

export default Switch;

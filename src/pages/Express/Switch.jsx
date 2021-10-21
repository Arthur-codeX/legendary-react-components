import React from "react";
import { useSelector } from "react-redux";

import Home from "./Dash/home";
import Server from "./Dash/Server";
import DotEnv from "./Dash/DotEnv";
import MiddleWare from "./Dash/middleWare";
import Routes from "./Dash/Routes";

const Switch = () => {
  var module = useSelector((store) => store.express.currentModule);
  console.log(module);
  if (module === "Home") return <Home />;
  if (module === "Server") return <Server />;
  if (module === "DotEnv") return <DotEnv />;
  if (module === "MiddleWare") return <MiddleWare />;
  if (module === "Routes") return <Routes />;
  return null;
};

export default Switch;

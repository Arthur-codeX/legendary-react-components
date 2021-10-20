import React from "react";

import Sidebar from "./sideBar";
import MainDash from "./mainDash";

const ExpressPage = () => {
  return (
    <div style={{ height: "100vh" }} className="stCont">
      <Sidebar />
      <MainDash />
    </div>
  );
};

export default ExpressPage;

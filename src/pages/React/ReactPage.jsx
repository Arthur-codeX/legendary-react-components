import React from "react";

import Sidebar from "./SideBar";
import MainDash from "./mainDash";

const ReactPage = () => {
  return (
    <div style={{ height: "100vh" }} className="stCont">
      <Sidebar />
      <MainDash />
    </div>
  );
};

export default ReactPage;

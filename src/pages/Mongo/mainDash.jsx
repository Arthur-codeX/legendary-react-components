import React from "react";

import Switch from "./Switch";

const MainDash = ({ mw }) => {
  mw = mw || "15";
  return (
    <div className="w3-container" style={{ marginLeft: `${mw}%` }}>
      <div style={{ marginTop: "25px", width: "100%" }}>
        <Switch />
      </div>
    </div>
  );
};

export default MainDash;

import React from "react";

import { InfoTopBar } from "./../../components/TopBars";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <InfoTopBar />
      <div style={{ width: "100%", height: "100 vh" }}>
        <SideBar />
        <MainSection />
      </div>
    </div>
  );
};

const SideBar = () => {
  return (
    <div
      className="w3-sidebar w3-light-grey w3-bar-block w3-card-4"
      style={{ width: "15%" }}
    >
      <button className="w3-bar-item w3-button w3-border-bottom w3-border-top w3-center">
        <h4>All Components</h4>
      </button>
      <button className="w3-bar-item w3-button w3-border-bottom ">
        <b>Top Bars</b>
      </button>
    </div>
  );
};

const MainSection = () => {
  return (
    <div className="w3-container" style={{ marginLeft: "15%" }}>
      <h2>The Side Bar</h2>
    </div>
  );
};

export default Home;

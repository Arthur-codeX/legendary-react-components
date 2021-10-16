import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { InfoTopBar } from "./../../components/TopBars";
import Switch from "../dashBoard/Switch";
import { pageToShow } from "./../../redux/actions/reducerActions";

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
  var btnColor = useSelector((state) => state.btnColor);
  var dispatch = useDispatch();

  return (
    <div
      className="w3-sidebar w3-light-grey w3-bar-block w3-card-4"
      style={{ width: "15%" }}
    >
      <h4 className="w3-bar-item w3-center">
        <b>All Components</b>
      </h4>
      <button
        className={`w3-bar-item w3-button w3-border-bottom  ${btnColor[0]}`}
        onClick={() => {
          dispatch(pageToShow("DashPage"));
        }}
      >
        <b>Dash Board</b>
      </button>
      <button
        className={`w3-bar-item w3-button w3-border-bottom ${btnColor[1]}`}
        onClick={() => {
          dispatch(pageToShow("TopBarPage"));
        }}
      >
        <b>Top Bars</b>
      </button>
    </div>
  );
};

const MainSection = () => {
  return (
    <div className="w3-container" style={{ marginLeft: "15%" }}>
      <div className="w3-margin-top">
        <Switch />
      </div>
    </div>
  );
};

export default Home;

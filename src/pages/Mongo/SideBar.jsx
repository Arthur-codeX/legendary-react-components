import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextModal } from "./../../redux/actions/reducer";

const Sidebar = ({ sideW }) => {
  sideW = sideW || "15";

  var btn = useSelector((store) => store.mongo.btns);
  var dispatch = useDispatch();
  var reqRed = "MONGO";
  return (
    <div
      className="w3-sidebar w3-bar-block w3-card-4"
      style={{ position: "fixed", paddingTop: "20px", width: `${sideW}%` }}
    >
      <h3 className="w3-bar-item w3-center">Mongo DB</h3>
      <button
        className={`w3-bar-item w3-button w3-border-top w3-border-bottom ${btn[0]}`}
        onClick={() => dispatch(nextModal("Home", reqRed))}
      >
        Getting Started
      </button>
      <button
        className={`w3-bar-item w3-button  w3-border-bottom ${btn[1]}`}
        onClick={() => dispatch(nextModal("Connection", reqRed))}
      >
        Connection
      </button>
      <button
        className={`w3-bar-item w3-button  w3-border-bottom ${btn[2]}`}
        onClick={() => dispatch(nextModal("Model", reqRed))}
      >
        Model/Schema
      </button>
    </div>
  );
};

export default Sidebar;

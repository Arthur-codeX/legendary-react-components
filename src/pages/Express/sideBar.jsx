import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextModal } from "./../../redux/actions/reducer";

const Sidebar = ({ sideW }) => {
  sideW = sideW || "15";

  var btn = useSelector((store) => store.express.btns);
  var dispatch = useDispatch();

  var reqRed = "EXPRESS";
  return (
    <div
      className="w3-sidebar w3-bar-block w3-card-4"
      style={{ position: "fixed", paddingTop: "20px", width: `${sideW}%` }}
    >
      <h3 className="w3-bar-item w3-center">Express Js</h3>
      <button
        className={`w3-bar-item w3-button w3-border-top w3-border-bottom ${btn[0]}`}
        onClick={() => dispatch(nextModal("Home", reqRed))}
      >
        Getting Started
      </button>
      <button
        className={`w3-bar-item w3-button  w3-border-bottom ${btn[1]}`}
        onClick={() => dispatch(nextModal("Server", reqRed))}
      >
        Server
      </button>
      <button
        className={`w3-bar-item w3-button  w3-border-bottom ${btn[2]}`}
        onClick={() => dispatch(nextModal("DotEnv", reqRed))}
      >
        DotEnv
      </button>
      <button
        className={`w3-bar-item w3-button  w3-border-bottom ${btn[3]}`}
        onClick={() => dispatch(nextModal("MiddleWare", reqRed))}
      >
        Middle Ware
      </button>
      <button
        className={`w3-bar-item w3-button  w3-border-bottom ${btn[4]}`}
        onClick={() => dispatch(nextModal("Routes", reqRed))}
      >
        Routes/Controller
      </button>
    </div>
  );
};

export default Sidebar;

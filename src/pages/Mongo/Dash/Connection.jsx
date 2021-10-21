import React from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCopy } from "react-icons/fa";

import { serverJs, connectionJs } from "./code";

const Connection = () => {
  return (
    <div>
      <h2 className="w3-center">
        <b>Mongoose</b>
      </h2>
      <p>
        First Ensure you have Mongo Db installed in the server or use Mongo Db
        Atlas to create a cluster. Not required but recomended{" "}
        <b>Use of Environmental variables</b>. Minimum no of files required to
        get started is three.
        <ul className="w3-ul w3-margin-top" style={{ width: "40%" }}>
          <li>Npm entry file. In This case: server.js</li>
          <li>Connection file. In This case:Connection.js</li>
          <li>dot Env File</li>
        </ul>
      </p>
      <div>
        <h2 className="w3-center">
          <b>Server.js file</b>
        </h2>
        <h5>
          This will be our entry point when we run npm start. it can be
          server.js or index js.
          <b> Ensure you get the right path for the connection</b>
        </h5>

        <div className=" w3-card-4 w3-container">
          <div className="w3-container w3-border w3-border-grey w3-code jsHigh ">
            <span
              className="w3-right w3-ripple w3-large pointer"
              onClick={() => {
                toast.success("code copied");
              }}
            >
              <CopyToClipboard text={serverJs}>
                <FaCopy />
              </CopyToClipboard>
            </span>
            <pre>{serverJs}</pre>
          </div>
        </div>
      </div>
      <div className="w3-margin-top">
        <h2 className="w3-center">
          <b>Connection Js</b>
        </h2>
        <h5>
          This will handle connecting to our Mongo Db &nbsp;
          <b>
            The Environmental variables file should contain the required URI to
            connect
          </b>
        </h5>

        <div className=" w3-card-4 w3-container">
          <div className="w3-container w3-border w3-border-grey w3-code jsHigh ">
            <span
              className="w3-right w3-ripple w3-large pointer"
              onClick={() => {
                toast.success("code copied");
              }}
            >
              <CopyToClipboard text={connectionJs}>
                <FaCopy />
              </CopyToClipboard>
            </span>
            <pre>{connectionJs}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connection;

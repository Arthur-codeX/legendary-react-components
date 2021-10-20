import React from "react";

import { serverCode } from "./code";

import { CodeTopBar } from "./../../../components/TopBar";

const Server = () => {
  var link =
    "https://codesandbox.io/s/fancy-tree-6epbb?file=/src/index.js:0-261";
  return (
    <div>
      <h2 className="w3-center">
        <b>Server Code</b>
      </h2>
      <h5>Quick start server code using express</h5>

      <div className=" w3-card-4 w3-container">
        <div className="w3-container w3-border w3-border-grey w3-code jsHigh ">
          <CodeTopBar copyText={serverCode} sandbox={link} />
          <pre>{serverCode}</pre>
        </div>
      </div>
    </div>
  );
};

export default Server;

import React from "react";

import { CodeTopBar } from "./../../../components/TopBar";
import { MiddleWareCode } from "./code";
const MiddleWare = () => {
  var link =
    "https://codesandbox.io/s/tender-euclid-hokld?file=/src/index.js:0-725";
  return (
    <div>
      <h2 className="w3-center">
        <b>Express Middle Ware</b>
      </h2>
      <p>
        Its code that is run between server request and server response. It can
        be connfigured to run before certain requests.
        <b> Mostly used for Autherntication.</b> code given covers both.
      </p>
      <div className=" w3-card-4 w3-container">
        <div className="w3-container w3-border w3-border-grey w3-code jsHigh ">
          <CodeTopBar copyText={MiddleWareCode} sandbox={link} />
          <pre>{MiddleWareCode}</pre>
        </div>
      </div>
    </div>
  );
};

export default MiddleWare;

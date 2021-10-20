import React from "react";

import { envServer, DotEnvFileCode } from "./code";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCopy } from "react-icons/fa";

const DotEnv = () => {
  return (
    <div>
      <h2 className="w3-center">
        <b>DotEnv</b>
      </h2>
      <p>
        Dotenv is a zero-dependency module that loads environment variables from
        a .env file into process.env. Storing configuration in the environment
        separate from code is based on The Twelve-Factor App methodology.
      </p>
      <div className="w3-container w3-margin-top">
        <h2 className="w3-center">
          <b>Installation</b>
        </h2>
        <div className="w3-container w3-code jsHigh">
          npm install express
          <span
            className="w3-right w3-ripple w3-large pointer"
            onClick={() => {
              toast.success("code copied");
            }}
          >
            <CopyToClipboard text="npm install express">
              <FaCopy />
            </CopyToClipboard>
          </span>
        </div>
        <div className="w3-container w3-code jsHigh">
          npm install dotenv
          <span
            className="w3-right w3-ripple w3-large pointer"
            onClick={() => {
              toast.success("code copied");
            }}
          >
            <CopyToClipboard text="npm install dotenv">
              <FaCopy />
            </CopyToClipboard>
          </span>
        </div>
      </div>
      <p>We Will have 2 files for the example to work.</p>
      <div>
        <h2 className="w3-center">
          <b>Server.js file</b>
        </h2>
        <h5>
          this will be our entry point when we run npm start. it can be
          server.js or index js
        </h5>

        <div className=" w3-card-4 w3-container">
          <div className="w3-container w3-border w3-border-grey w3-code jsHigh ">
            <span
              className="w3-right w3-ripple w3-large pointer"
              onClick={() => {
                toast.success("code copied");
              }}
            >
              <CopyToClipboard text={envServer}>
                <FaCopy />
              </CopyToClipboard>
            </span>
            <pre>{envServer}</pre>
          </div>
        </div>
      </div>
      <div className="w3-margin-top ">
        <h2 className="w3-center">
          <b>.env file</b>
        </h2>
        <h5>Should be created on root directory.</h5>

        <div className=" w3-card-4 w3-container">
          <div className="w3-container w3-border w3-border-grey w3-code jsHigh ">
            <span
              className="w3-right w3-ripple w3-large pointer"
              onClick={() => {
                toast.success("code copied");
              }}
            >
              <CopyToClipboard text={DotEnvFileCode}>
                <FaCopy />
              </CopyToClipboard>
            </span>
            <pre>{DotEnvFileCode}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DotEnv;

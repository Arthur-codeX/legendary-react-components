import React from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCopy } from "react-icons/fa";

import { usersSchema } from "./../../Mongo/Dash/code";
import { DBFile, ControllerFile, routerServer, routeFile } from "./code";
const Routes = () => {
  return (
    <div>
      <h2 className="w3-center">
        <b>Routes</b>
      </h2>
      <p>
        This allows us to declutter our api. Will use a users example route.
        Five files will will be used to give an example Database Model,Data base
        functions,controller file,route and entry point file , that is server.js
      </p>
      <div>
        <h2 className="w3-center">
          <b>Data Base Model File</b>
        </h2>
        <div className=" w3-card-4 w3-container">
          <div className="w3-container w3-border w3-border-grey w3-code jsHigh ">
            <span
              className="w3-right w3-ripple w3-large pointer"
              onClick={() => {
                toast.success("code copied");
              }}
            >
              <CopyToClipboard text={usersSchema}>
                <FaCopy />
              </CopyToClipboard>
            </span>
            <pre>{usersSchema}</pre>
          </div>
        </div>
      </div>
      <div>
        <h2 className="w3-center w3-margin-top">
          <b>Data Base File</b>
        </h2>
        <div className=" w3-card-4 w3-container">
          <div className="w3-container w3-border w3-border-grey w3-code jsHigh ">
            <span
              className="w3-right w3-ripple w3-large pointer"
              onClick={() => {
                toast.success("code copied");
              }}
            >
              <CopyToClipboard text={DBFile}>
                <FaCopy />
              </CopyToClipboard>
            </span>
            <pre>{DBFile}</pre>
          </div>
        </div>
      </div>
      <div>
        <h2 className="w3-center w3-margin-top">
          <b>Controller File</b>
        </h2>
        <div className=" w3-card-4 w3-container">
          <div className="w3-container w3-border w3-border-grey w3-code jsHigh ">
            <span
              className="w3-right w3-ripple w3-large pointer"
              onClick={() => {
                toast.success("code copied");
              }}
            >
              <CopyToClipboard text={ControllerFile}>
                <FaCopy />
              </CopyToClipboard>
            </span>
            <pre>{ControllerFile}</pre>
          </div>
        </div>
      </div>
      <div>
        <h2 className="w3-center w3-margin-top">
          <b>Route File</b>
        </h2>
        <div className=" w3-card-4 w3-container">
          <div className="w3-container w3-border w3-border-grey w3-code jsHigh ">
            <span
              className="w3-right w3-ripple w3-large pointer"
              onClick={() => {
                toast.success("code copied");
              }}
            >
              <CopyToClipboard text={routeFile}>
                <FaCopy />
              </CopyToClipboard>
            </span>
            <pre>{routeFile}</pre>
          </div>
        </div>
      </div>
      <div>
        <h2 className="w3-center w3-margin-top">
          <b>Route Server File</b>
        </h2>
        <div className=" w3-card-4 w3-container">
          <div className="w3-container w3-border w3-border-grey w3-code jsHigh ">
            <span
              className="w3-right w3-ripple w3-large pointer"
              onClick={() => {
                toast.success("code copied");
              }}
            >
              <CopyToClipboard text={routerServer}>
                <FaCopy />
              </CopyToClipboard>
            </span>
            <pre>{routerServer}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Routes;

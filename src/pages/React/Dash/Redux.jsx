import React from "react";

import { CodeTopBar2 } from "./../../../components/TopBar";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCopy } from "react-icons/fa";

import { appJS, actionJs, storeJs, indexJS } from "./code";

const ReduxEx = () => {
  return (
    <div>
      <h2 className="w3-center">
        <b>Redux</b>
      </h2>
      <h3 className="w3-center">
        A Predictable State Container for JS Apps{" "}
        <span className="w3-right w3-margin-right">
          <CodeTopBar2
            sandbox={"https://codesandbox.io/s/tech-pulse-redux-fjyt7"}
          />
        </span>
      </h3>
      <div className="w3-margin-top">
        <h3 className="w3-center">
          <b>Dependecies</b>
        </h3>
        <p>Below is a list of requred dependencies</p>
        <div className="w3-container">
          <div className="w3-container w3-code jsHigh">npm install redux</div>
          <div className="w3-container w3-code jsHigh">
            npm install react-redux
          </div>
        </div>
      </div>
      <div className="w3-margin-top">
        <h3 className="w3-center">
          <b>Redux Basic</b>
        </h3>
        <p>
          The code given is for abasic redux app for changing btn color using a
          global state.The following are the required files.Both files will be
          stored on a redux folder.{" "}
          <b>
            The action file is not required but it makes our work look neat.{" "}
          </b>
          <a href="http://" target="_blank" className="aStyle w3-text-blue">
            sample sandbox code
          </a>
        </p>
        <ul>
          <li>store file: will contain our global state</li>
          <li>action file: will contain redux actions.</li>
        </ul>
      </div>
      <div>
        <h2 className="w3-center">
          <b>Index JS File</b>
        </h2>
      </div>
      <div className=" w3-card-4 w3-container">
        <div className="w3-container w3-border w3-border-grey w3-code jsHigh ">
          <span
            className="w3-right w3-ripple w3-large pointer"
            onClick={() => {
              toast.success("code copied");
            }}
          >
            <CopyToClipboard text={indexJS}>
              <FaCopy />
            </CopyToClipboard>
          </span>
          <pre>{indexJS}</pre>
        </div>
      </div>
      <div>
        <h2 className="w3-center">
          <b>Store JS File</b>
        </h2>
      </div>
      <div className=" w3-card-4 w3-container">
        <div className="w3-container w3-border w3-border-grey w3-code jsHigh ">
          <span
            className="w3-right w3-ripple w3-large pointer"
            onClick={() => {
              toast.success("code copied");
            }}
          >
            <CopyToClipboard text={storeJs}>
              <FaCopy />
            </CopyToClipboard>
          </span>
          <pre>{storeJs}</pre>
        </div>
      </div>
      <div>
        <h2 className="w3-center">
          <b>Action JS File</b>
        </h2>
      </div>
      <div className=" w3-card-4 w3-container">
        <div className="w3-container w3-border w3-border-grey w3-code jsHigh ">
          <span
            className="w3-right w3-ripple w3-large pointer"
            onClick={() => {
              toast.success("code copied");
            }}
          >
            <CopyToClipboard text={actionJs}>
              <FaCopy />
            </CopyToClipboard>
          </span>
          <pre>{actionJs}</pre>
        </div>
      </div>
      <div>
        <h2 className="w3-center">
          <b>App JS File</b>
        </h2>
      </div>
      <div className=" w3-card-4 w3-container">
        <div className="w3-container w3-border w3-border-grey w3-code jsHigh ">
          <span
            className="w3-right w3-ripple w3-large pointer"
            onClick={() => {
              toast.success("code copied");
            }}
          >
            <CopyToClipboard text={appJS}>
              <FaCopy />
            </CopyToClipboard>
          </span>
          <pre>{appJS}</pre>
        </div>
      </div>
    </div>
  );
};

export default ReduxEx;

import React from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCopy } from "react-icons/fa";

import { modelServerJs, usersSchema } from "./code";

const Model = () => {
  return (
    <div>
      <h2 className="w3-center">
        <b>Models And Schemas</b>
      </h2>
      <p>
        Models are fancy constructors compiled from Schema definitions. An
        instance of a model is called a document. Models are responsible for
        creating and reading documents from the underlying MongoDB database.
      </p>
      <p>
        Schema maps to a MongoDB collection and defines the shape of the
        documents within that collection.
        <br />
        <b>Example data to be used is for users.</b>
      </p>
      <div>
        <h2 className="w3-center">
          <b>Users Schema</b>
        </h2>
        <h5>
          We will define a users schema. Depending on the project we can have
          multiple files for each shema or a single file for all schemas.
          <b>Recommended is single file for all schemas for simplicity</b>
        </h5>
      </div>

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
      <div>
        <h2 className="w3-center">
          <b>Server JS</b>
        </h2>
        <h5>
          This will be our entry point when we run npm start. it can be
          server.js or index js. Ensure you get the right path for the
          connection
        </h5>
        <p>
          The code below is for creating a user when you go to:
          http://localhost:4234/newUser
          <b>
            &nbsp;Note: Change the user variables and refresh to create another
            user.
          </b>
        </p>
      </div>
      <div className=" w3-card-4 w3-container">
        <div className="w3-container w3-border w3-border-grey w3-code jsHigh ">
          <span
            className="w3-right w3-ripple w3-large pointer"
            onClick={() => {
              toast.success("code copied");
            }}
          >
            <CopyToClipboard text={modelServerJs}>
              <FaCopy />
            </CopyToClipboard>
          </span>
          <pre>{modelServerJs}</pre>
        </div>
      </div>
    </div>
  );
};

export default Model;

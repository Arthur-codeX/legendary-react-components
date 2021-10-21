import React from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCopy } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div className="w3-container w3-card-4 w3-round">
        <p className="w3-xxxlarge w3-center w3-text-blue">
          <b>Mongo</b> <span className="w3-small"> Db</span>
        </p>
        <p className="w3-xlarge" style={{ opacity: 0.5 }}>
          MongoDB is a document database which is scallable and flexible.In
          order to work effectively with Mongo Db We are going to use Mongoose.
          which is a node package which provides straight-forward solution to
          easily model our database.
        </p>
      </div>
      <div className="w3-container w3-margin-top">
        <h2 className="w3-center">
          <b>Installation</b>
        </h2>
        <div className="w3-container w3-code jsHigh">
          npm install Mongoose
          <span
            className="w3-right w3-ripple w3-large pointer"
            onClick={() => {
              toast.success("code copied");
            }}
          >
            <CopyToClipboard text="npm install Mongoose">
              <FaCopy />
            </CopyToClipboard>
          </span>
        </div>
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
      </div>
    </div>
  );
};

export default Home;

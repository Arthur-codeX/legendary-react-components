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
          <b>REACT</b> <span className="w3-small"> js</span>
        </p>
        <p className="w3-xlarge" style={{ opacity: 0.5 }}>
          React. js is an open-source JavaScript library that is used for
          building user interfaces specifically for single-page applications.
          It's used for handling the view layer for web and mobile apps. React
          also allows us to create reusable UI components
        </p>
      </div>
      <div className="w3-container w3-margin-top">
        <h2 className="w3-center">
          <b>Getting Started</b>
        </h2>
        <p className="w3-container">
          Creating a new react app with app name same as containing directory.
        </p>
        <div className="w3-container w3-code jsHigh">npx create-react-app</div>

        <p className="w3-container">
          Creating a new react app with directory name <b>myapp</b>
        </p>
        <div className="w3-container w3-code jsHigh">
          npx create-react-app myapp
        </div>
      </div>
    </div>
  );
};

export default Home;

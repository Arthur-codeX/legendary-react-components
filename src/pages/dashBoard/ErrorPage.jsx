import React from "react";

import { useSelector } from "react-redux";
const ErrorPage = () => {
  return (
    <div className="w3-container">
      <div className="w3-panel w3-light-grey w3-leftbar">
        <p className="w3-xxlarge">Seems Navigation has encoutered an error.</p>
        <p className="w3-center">
          <button
            className="w3-button w3-blue"
            onClick={() => console.log("Back Home")}
          >
            Back To Home
          </button>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;

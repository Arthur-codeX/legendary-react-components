import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => (
  <div
    style={{ height: "100vh" }}
    className="w3-display-container w3-light-grey"
  >
    <div className="w3-display-middle">
      <p className="w3-xxxlarge w3-center">
        <b>404 !</b> Page Not Found. Go Back Home
      </p>
      <p className="w3-center">
        <Link to="" className="w3-button w3-blue w3-round">
          Home
        </Link>
      </p>
    </div>
  </div>
);

export default ErrorPage;

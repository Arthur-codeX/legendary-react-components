import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w3-bar w3-blue">
      <Link to="/" className="w3-button w3-bar-item">
        Home
      </Link>
      <Link to="/Express" className="w3-button w3-bar-item horizontalMargin1">
        Express
      </Link>
    </div>
  );
};

export { NavBar };

import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [navBtn, setNavBtn] = useState(["w3-black", "", ""]);

  function BtnClick(no = 0) {
    var btns = [];
    for (let i = 0; i < navBtn.length; i++) {
      if (i === no) {
        btns.push("w3-black");
        continue;
      }
      btns.push("");
    }
    setNavBtn(btns);
  }
  return (
    <div className="w3-bar w3-blue fixedEl">
      <Link
        to="/"
        className={`w3-button w3-bar-item w3-margin-left ${navBtn[0]}`}
        onClick={() => BtnClick(0)}
      >
        Home
      </Link>
      <Link
        to="/Express"
        className={`w3-button w3-bar-item horizontalMargin1 ${navBtn[1]}`}
        onClick={() => BtnClick(1)}
      >
        Express
      </Link>
    </div>
  );
};

export { NavBar };

// //

//
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const BackInfoTopBar = ({ mess, color, card, backBtn }) => {
  mess = mess || "Legendary Message";
  color = color || "";
  card = card || "";
  return (
    <div className={`w3-bar  ${color} ${card}`}>
      <span
        className="w3-xlarge w3-bar-item w3-margin-left w3-margin-right pointer w3-ripple"
        onClick={() => backBtn()}
      >
        <FaArrowLeft />
      </span>
      <b className="w3-xlarge w3-bar-item w3-margin-left">{mess}</b>
    </div>
  );
};

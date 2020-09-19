import React from "react";
import "./index.css";
import constants from "../../../constants";

function PopOver({ position, height }) {
  const popoverStyle = {
    height,
  };

  const arrowDim = height * Math.sqrt(2);
  const arrowStyle = {
    width: arrowDim,
    height: arrowDim,
    top: position === "top" ? height - arrowDim / 2 : -arrowDim / 2,
    backgroundColor: constants.popOverOrBarColor,
  };

  return (
    <div className="popover" style={popoverStyle}>
      <div className="arrow" style={arrowStyle} />
    </div>
  );
}

export default PopOver;

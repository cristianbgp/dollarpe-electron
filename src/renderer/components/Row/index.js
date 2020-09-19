import React from "react";
import "./index.css";

function Row({ name, buy, sell, titles = false }) {
  return (
    <div className="row">
      <div className="name-container">
        <p className="name">{name}</p>
      </div>
      {titles ? (
        <div className="flex-1">
          <p className="flex-1 left-20 title">BUY</p>
          <p className="flex-1 title">SELL</p>
        </div>
      ) : (
        <div className="flex-1">
          <p className="flex-1 left-20">S/ {buy}</p>
          <p className="flex-1">S/ {sell}</p>
        </div>
      )}
    </div>
  );
}

export default Row;

import React from "react";
import "./progressBar.css";

const ProgressBar = ({ value }) => {
  return (
    <div className="progress-bar">
      <span style={{ color: `${value < 50 ? "black" : "white"}` }}>
        {value}%
      </span>
      <div style={{ width: `${value}%` }} />
    </div>
  );
};

export default ProgressBar;

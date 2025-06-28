import React from "react";
import "./CircularProgress.css";

function CircularProgress({ value, offset, color }) {
  return (
    <div className="circular-progress">
      <div className="details">
        <h1>{value}</h1>
        <p>%</p>
      </div>

      <svg>
        <circle cx={55} cy={55} r={50} className="svg-circle1" />

        <circle
          cx={55}
          cy={55}
          r={50}
          className="svg-circle2"
          style={{ "--clr": color, "--p": offset }}
        />
      </svg>
    </div>
  );
}

export default CircularProgress;

import React from "react";

const Score = ({ score }) => {
  return (
    <div>
      <h3> Score: {score.score}</h3>
      <h4>Date: {score.date}</h4>
    </div>
  );
};

export default Score;

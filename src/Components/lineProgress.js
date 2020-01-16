import React, { useState, useEffect } from "react";
import Filler from "./lineFiller";

const LineProgress = () => {
  const [percentage, changePercent] = useState(0);
  const [newPercentage, changeNewPrecentage] = useState(7);

  useEffect(() => {
    if (percentage === newPercentage) return;
    changePercent(percentage + 1);
    console.log(percentage);
  });

  console.log(percentage);
  return (
    <div className="my-progress-bar">
      <Filler percentage={percentage} />
    </div>
  );
};

export default LineProgress;

import React, { useState, useEffect } from "react";
import Filler from "./lineFiller";

const LineProgress = ({ data, progress }) => {
  const [end, setEnd] = useState(0);
  const [count, setCount] = useState(0);

  const myProgress = progress;
  const myData = data;
  useEffect(() => {
    if (myProgress > count) setCount(count + 1);
    if (end !== myData) setEnd(end + 1);
  });

  return (
    <div className="m-1 my-progress-bar">
      <Filler percentage={end} progress={progress} />
    </div>
  );
};

export default LineProgress;

import React, { useState, useEffect } from "react";
import Filler from "./lineFiller";

const LineProgress = ({ data, progress }) => {
  const [end, setEnd] = useState(0);

  const myData = data;
  useEffect(() => {
    if (end < myData) setEnd(end + 1);
  });

  return (
    <div className="m-1 my-progress-bar">
      <Filler percentage={end} progress={progress} />
    </div>
  );
};

export default LineProgress;

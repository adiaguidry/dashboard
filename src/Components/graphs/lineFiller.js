import React from "react";

const Filler = ({ percentage }) => {
  console.log("filler got a prop", percentage);
  return <div className="filler" style={{ width: percentage + "rem" }} />;
};

export default Filler;

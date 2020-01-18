import React from "react";

const Filler = ({ percentage, progress }) => {
  return (
    <div className="filler" style={{ width: percentage + "%" }}>
      <span
        style={{
          fontSize: ".7rem",
          position: "absolute",
          color: "#fff",
          bottom: 1
        }}
      >
        {progress}
      </span>
    </div>
  );
};

export default Filler;

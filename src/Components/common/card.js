import React from "react";
import LineProgress from "../graphs/lineProgress";

const Card = ({ col, title, header, i, graph, smallText }) => {
  return (
    <div className={col}>
      <div className=" text-center card" style={{ width: "100%" }}>
        <div className="card-body">
          <h5 className="card-title pt-4">{title}</h5>
          <h5 className="card-subtitle mb-2 text-muted">{header}</h5>
          <p className="card-text">{i && <i className={i}></i>}</p>
          <small className="text-muted">{smallText}</small>

          <div className="card-text mt-4">{graph}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

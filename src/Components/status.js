import React, { useState } from "react";
import Card from "../Components/common/card";
import DoughnutChart from "./graphs/doughnutChart";
import HalfDoughnut from "./graphs/halfDoughnut";
import LineProgress from "./graphs/lineProgress";

//put days of the week and cals for the week into state and map over it

const Status = () => {
  const [dotw, setdotw] = useState([
    { day: "Sunday", data: 50, progress: "1500" },
    { day: "Monday", data: 70, progress: "1700" },
    { day: "Tuesday", data: 100, progress: "2000" },
    { day: "Wednesday", data: 100, progress: "2000" },
    { day: "Thursday", data: 80, progress: "1800" },
    { day: "Friday", data: 100, progress: "2000" },
    { day: "Saturday", data: 50, progress: "1500" }
  ]);
  return (
    <React.Fragment>
      <h2>Last Weeks Status</h2>
      <p>Here's a look at how last week went for you.</p>

      <div className="row">
        <div className="col-md-4 p-3">
          <div className=" text-center card" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">Target Calories</h5>
              <h6 className="card-subtitle mb-2 text-muted">2000</h6>
              <p className="card-text">
                {dotw.map(d => (
                  <div className="row">
                    <div className="col-md-4">
                      <small>{d.day}</small>
                    </div>
                    <div className="col-md-8 ">
                      <LineProgress data={d.data} progress={d.progress} />
                    </div>
                  </div>
                ))}
              </p>
            </div>
          </div>
        </div>
        <Card
          col={"col-md-4 p-3"}
          title={"Intermittent fasting"}
          header={"Target 14 hours"}
          graph={<DoughnutChart />}
        />
        <Card
          col={"col-md-4 p-3"}
          title={"Workouts"}
          header={"Target 30min"}
          graph={<HalfDoughnut />}
        />
      </div>
    </React.Fragment>
  );
};

export default Status;

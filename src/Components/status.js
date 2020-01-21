import React, { useState, useEffect } from "react";
import Card from "../Components/common/card";
import DoughnutChart from "./graphs/doughnutChart";
import HalfDoughnut from "./graphs/halfDoughnut";
import LineProgress from "./graphs/lineProgress";

//put days of the week and cals for the week into state and map over it
//data cals/2000
const Status = () => {
  const [dotw, setdotw] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://secret-scrubland-67195.herokuapp.com/healthtracker"
      );
      const healthTracker = await response.json();
      const dotw = healthTracker[0].week;
      console.log(dotw);
      setdotw(dotw);
    }
    fetchData();
  }, []);
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
              <div className="card-text">
                {dotw &&
                  dotw.map(d => (
                    <div key={d._id} className="row">
                      <div className="col-md-4">
                        <small>{d.name}</small>
                      </div>
                      <div className="col-md-8 ">
                        <LineProgress
                          data={d.calPercent}
                          progress={d.calories}
                        />
                      </div>
                    </div>
                  ))}
              </div>
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

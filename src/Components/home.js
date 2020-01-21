import React, { useState, useEffect } from "react";
import DoughnutChart from "./graphs/doughnutChart";
import LineProgress from "./graphs/lineProgress";
import Calendar from "./graphs/calendar";
import Card from "./common/card";
import CalendarMonth from "./graphs/calendarMonth";
import HalfDoughnut from "./graphs/halfDoughnut";
function HomePage() {
  const [user, setUser] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://secret-scrubland-67195.herokuapp.com/healthtracker"
      );
      const healthTracker = await response.json();
      const user = healthTracker[0];
      console.log(user);
      setUser(user);
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <h1 className="mt-4">Welcome {user && user.name} </h1>

      <div className="row">
        {user && (
          <Card
            col={"col-md-4 p-3"}
            title={"Daily Calories"}
            smallText={
              "This incluedes all meals and snacks. While hitting all goals for Macros."
            }
            header={user.calorieTarget}
            i={"fa fa-cutlery fa-4x"}
          />
        )}

        <div className="col-md-8 p-3">
          <div className=" card" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">Meal Breakdown</h5>

              <span className="badge badge-primary m-1">Fats</span>
              <span className="badge badge-success m-1">Protiens</span>
              <span className="badge badge-info m-1">Carbs</span>
              <div className="card-text">
                <div className="row">
                  <div className="col-md-3">
                    <DoughnutChart />
                  </div>
                  <div className="col-md-3">
                    <DoughnutChart />
                  </div>
                  <div className="col-md-3">
                    <DoughnutChart />
                  </div>
                </div>
              </div>
              <p className="mt-4">
                Each of your meals are broken down into 3 macro groups, this
                will determine your ketone levels.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <Card
          col={"col-md-3 p-3"}
          title={"Intermittent fasting"}
          header={"Target 14 hours a day"}
          graph={<LineProgress progress={"14 hours"} data={100} />}
        />
        <Card
          col={"col-md-3 p-3"}
          title={"Sleep"}
          header={"8 Hours per Night"}
          i={"fa fa-bed fa-4x"}
        />
        <Card
          col={"col-md-3 p-3"}
          title={"Days in Ketosis"}
          header={"Carbs under 30g"}
          graph={<Calendar />}
        />
        <Card
          col={"col-md-3 p-3"}
          title={"Steps or Workouts"}
          header={"Target 10,000 steps day"}
          graph={<LineProgress progress={"5,000 steps"} data={50} />}
        />
      </div>
      <div className="row">
        <div className="col-md-8 p-3">
          <div className=" card">
            <div className="card-body">
              <h5 className="card-title">Monthly Goals</h5>
              <h6 className="card-subtitle mb-2 text-muted">Dec</h6>
              <div className="row">
                <div className="ml-2 col-md-5 pl-3">
                  <CalendarMonth />
                </div>
                <div className="col-md-6 p-3">
                  <h6 className="card-subtitle mb-4 text-muted">
                    <i className="fa fa-check-square-o"></i> You hit your
                    targets 13 times
                  </h6>
                  <h6 className="card-subtitle mb-4 text-muted">
                    <i className="fa fa-check-square-o"></i> You were in Ketosis
                    2 days a week
                  </h6>
                  <h6 className="card-subtitle mb-4 text-muted">
                    <i className="fa fa-check-square-o"></i> You hit your steps
                    everyday!
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-3">
          <div className=" text-center card" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">Active Workouts</h5>
              <h6 className="card-subtitle mb-2 text-muted">30mins a day</h6>
              <p className="card-text"></p>

              <HalfDoughnut />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default HomePage;

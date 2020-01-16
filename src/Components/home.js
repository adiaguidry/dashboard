import React, { useState, useEffect } from "react";
import DoughnutChart from "./graphs/doughnutChart";
// import NivoGraph from "./nivoGraphs/nivoGraph";
// import NivoLineGraph from "./nivoGraphs/nivoLineGraph";
// import NivoCalendar from "./nivoCalendar";
import LineProgress from "./graphs/lineProgress";
import Calendar from "./graphs/calendar";
import Card from "./common/card";
import CalendarMonth from "./graphs/calendarMonth";
function HomePage() {
  const [users, setUsers] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/users");
      const users = await response.json();
      console.log(users);
      setUsers(users);
    }
    fetchData();
  }, []);
  return (
    <React.Fragment>
      {users &&
        users.map(user => <h1 className="mt-4">Welcome {user.username} </h1>)}

      <div className="row">
        <Card
          col={"col-md-4 p-3"}
          title={"Daily Calories"}
          smallText={
            "This incluedes all meals and snacks. While hitting all goals for Macros."
          }
          header={"2000"}
          i={"fa fa-cutlery fa-4x"}
        />

        <div class="col-md-8 p-3">
          <div class=" card" style={{ width: "100%" }}>
            <div class="card-body">
              <h5 class="card-title">Meal Breakdown</h5>
              <span class="badge badge-primary m-1">Fats</span>
              <span class="badge badge-success m-1">Protiens</span>
              <span class="badge badge-info m-1">Carbs</span>
              <p class="card-text">
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
          graph={<LineProgress />}
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
          graph={<LineProgress />}
        />
      </div>
      <div className="row">
        <div class="col-md-8 p-3">
          <div class=" card" style={{ width: "100%" }}>
            <div class="card-body">
              <h5 class="card-title">Breakfast this Week</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text"></p>
              <div>
                <CalendarMonth />
              </div>
              <a href="#" class="card-link">
                Card link
              </a>
              <a href="#" class="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4 p-3">
          <div class=" text-center card" style={{ width: "100%" }}>
            <div class="card-body">
              <h5 class="card-title">Daily Calories</h5>
              <h6 class="card-subtitle mb-2 text-muted">2000</h6>
              <p class="card-text"></p>
              <a href="#" class="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default HomePage;

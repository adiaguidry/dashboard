import React, { useState, useEffect } from "react";
import DoughnutChart from "./graphs/doughnutChart";
import NivoGraph from "./nivoGraph";
import NivoLineGraph from "./nivoLineGraph";
import NivoCalendar from "./nivoCalendar";
import LineProgress from "./graphs/lineProgress";
import Calendar from "./graphs/calendar";
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
        <div class="col-md-4 p-3">
          <div class=" text-center card" style={{ width: "100%" }}>
            <div class="card-body">
              <h5 class="card-title pt-4">Daily Calories</h5>
              <h5 class="card-subtitle mb-2 text-muted">2000</h5>
              <p class="card-text">
                <i class="fa fa-cutlery fa-4x"></i>
              </p>
              <small className="text-muted">
                This incluedes all meals and snacks. While hitting all goals for
                Macros.
              </small>
            </div>
          </div>
        </div>
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
        <div class="col-md-3 p-3">
          <div class=" text-center card" style={{ width: "100%" }}>
            <div class="card-body">
              <h5 class="card-title">Intermittent fasting</h5>
              <small class="card-subtitle text-muted">
                Target 14 hours a day
              </small>

              <div class="card-text mt-4">
                <LineProgress />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 p-3">
          <div class=" text-center card" style={{ width: "100%" }}>
            <div class="card-body">
              <h5 class="card-title">Sleep</h5>
              <h6 class="card-subtitle mb-4 text-muted">8 Hours per Night</h6>

              <p class="card-text">
                <i class="fa fa-bed fa-4x"></i>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3 p-3">
          <div class=" text-center card" style={{ width: "100%" }}>
            <div class="card-body">
              <h5 class="card-title">Ketosis</h5>
              <small class="card-subtitle text-muted">
                Carbs under 30g per day
              </small>
              <div class="card-text mb-4">
                <Calendar />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 p-3">
          <div class=" text-center card" style={{ width: "100%" }}>
            <div class="card-body">
              <h5 class="card-title">Steps or Workouts</h5>
              <small class="card-subtitle text-muted">
                Target 10,000 steps day
              </small>

              <div class="card-text mt-4">
                <LineProgress />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div class="col-md-8 p-3">
          <div class=" card" style={{ width: "100%" }}>
            <div class="card-body">
              <h5 class="card-title">Breakfast this Week</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                <NivoCalendar />
              </p>
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
              <p class="card-text">
                <NivoLineGraph />
              </p>
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

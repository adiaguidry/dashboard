import React, { useState, useEffect } from "react";
import $ from "jquery";
import SideBar from "./sideBar";
import NavBar from "./navBar";
import Graph from "./graphs/doughnutChart";
import NivoGraph from "./nivoGraphs/nivoGraph";
import NivoLineGraph from "./nivoGraphs/nivoLineGraph";
import NivoCalendar from "./nivoGraphs/nivoCalendar";

function Motivation() {
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

      <p>Make sure to keep all page content within the</p>

      <div className="row">
        <div class="col-md-4 p-3">
          <div class=" text-center card" style={{ width: "100%" }}>
            <div class="card-body">
              <h5 class="card-title">Daily Calories</h5>
              <h6 class="card-subtitle mb-2 text-muted">2000</h6>
              <p class="card-text">
                <i class="fa fa-cutlery fa-3x"></i>
              </p>
              <a href="#" class="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-8 p-3">
          <div class=" card" style={{ width: "100%" }}>
            <div class="card-body">
              <h5 class="card-title">Breakfast this Week</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                <Graph />
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
      </div>
      <div className="row">
        <div class="col-md-3 p-3">
          <div class=" text-center card" style={{ width: "100%" }}>
            <div class="card-body">
              <h5 class="card-title">Daily Calories</h5>
              <h6 class="card-subtitle mb-2 text-muted">2000</h6>
              <div>
                <p>Fasting for 16 hours</p>
              </div>
              <p class="card-text">
                <NivoGraph />
              </p>
              <a href="#" class="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-3 p-3">
          <div class=" text-center card" style={{ width: "100%" }}>
            <div class="card-body">
              <h5 class="card-title">Daily Calories</h5>
              <h6 class="card-subtitle mb-2 text-muted">2000</h6>
              <div>
                <p>Fasting for 16 hours</p>
              </div>
              <p class="card-text">
                <NivoGraph />
              </p>
              <a href="#" class="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-3 p-3">
          <div class=" text-center card" style={{ width: "100%" }}>
            <div class="card-body">
              <h5 class="card-title">Daily Calories</h5>
              <h6 class="card-subtitle mb-2 text-muted">2000</h6>
              <div>
                <p>Fasting for 16 hours</p>
              </div>
              <p class="card-text">
                <NivoGraph />
              </p>
              <a href="#" class="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-3 p-3">
          <div class=" text-center card" style={{ width: "100%" }}>
            <div class="card-body">
              <h5 class="card-title">Daily Calories</h5>
              <h6 class="card-subtitle mb-2 text-muted">2000</h6>
              <div>
                <p>Fasting for 16 hours</p>
              </div>
              <p class="card-text">
                <NivoGraph />
              </p>
              <a href="#" class="card-link">
                Another link
              </a>
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
export default Motivation;

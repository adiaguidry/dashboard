import React, { useState, useEffect } from "react";
import "./App.scss";
import $ from "jquery";
import Homepage from "./Components/home";
import Profile from "./Components/profile";
import Motivation from "./Components/motivation";
import Status from "./Components/status";
import SideBar from "./Components/sideBar";
import NavBar from "./Components/navBar";
import { useRoutes, A } from "hookrouter";

function App() {
  const [toggle, handleToggle] = useState(false);

  const routes = {
    "/": () => <Homepage />,
    "/profile": () => <Profile />,
    "/motivation": () => <Motivation />,
    "/status": () => <Status />
  };
  const routeResult = useRoutes(routes);

  return (
    <div
      className={
        toggle ? "d-flex dashboard-wrapper toggled" : "d-flex dashboard-wrapper"
      }
      id="wrapper"
    >
      <div className="bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading">Health tracker</div>
        <div className="list-group list-group-flush">
          <A href="/" className="list-group-item list-group-item-action">
            Dashboard
          </A>
          <a href="/status" className="list-group-item list-group-item-action">
            Status
          </a>
          <A href="/profile" className="list-group-item list-group-item-action">
            Profile
          </A>
          <a
            href="/motivation"
            className="list-group-item list-group-item-action"
          >
            Motivation
          </a>
        </div>
      </div>
      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <button
            onClick={() => handleToggle(!toggle)}
            className="btn btn-primary"
            id="menu-toggle"
          >
            <i className="fa fa-bars 4x"></i>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          ></div>
        </nav>
        <div className="container-fluid">{routeResult}</div>
      </div>
    </div>
  );
}

export default App;

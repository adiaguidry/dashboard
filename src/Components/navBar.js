import React, { useState, useEffect } from "react";
import Homepage from "./home";
import Profile from "./profile";
import Status from "./status";
import SideBar from "./sideBar";
import { useRoutes, A } from "hookrouter";
import routes from "./routes";

const NavBar = () => {
  const [toggle, handleToggle] = useState(false);
  const routeResult = useRoutes(routes);
  return (
    <div
      className={
        toggle ? "d-flex dashboard-wrapper toggled" : "d-flex dashboard-wrapper"
      }
      id="wrapper"
    >
      <SideBar />
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
};

export default NavBar;

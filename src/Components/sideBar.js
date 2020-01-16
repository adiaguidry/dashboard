import React from "react";
import { useRoutes, A } from "hookrouter";
import Profile from "./profile";
import Home from "./home";

const SideBar = () => {
  const routes = {
    "/": () => <Home />,
    "/profile": () => <Profile />
  };
  const routeResult = useRoutes(routes);

  return (
    <div className="bg-white" id="sidebar-wrapper">
      <div className="sidebar-heading">Health tracker</div>
      <div className="list-group list-group-flush">
        <A href="/" className="list-group-item list-group-item-action">
          Dashboard
        </A>
        <a href="#" className="list-group-item list-group-item-action">
          Events
        </a>
        <A href="/profile" className="list-group-item list-group-item-action">
          Profile
        </A>
        <a href="#" className="list-group-item list-group-item-action">
          Status
        </a>
      </div>
    </div>
  );
};

export default SideBar;

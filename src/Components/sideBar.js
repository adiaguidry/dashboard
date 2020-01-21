import React from "react";
import { A } from "hookrouter";

const SideBar = () => {
  return (
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
      </div>
    </div>
  );
};

export default SideBar;

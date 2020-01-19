import React from "react";
import Homepage from "./home";
import Profile from "./profile";
import Status from "./status";

const routes = {
  "/": () => <Homepage />,
  "/profile": () => <Profile />,
  "/status": () => <Status />
};

export default routes;

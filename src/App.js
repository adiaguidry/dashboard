import React from "react";
import "./App.scss";

import NavBar from "./Components/navBar";

function App() {
  console.log("env..", process.env);
  return <NavBar />;
}

export default App;

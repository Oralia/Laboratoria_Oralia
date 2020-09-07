import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Screen1 from "./components/Screen1/Screen1.js";
import Screen2 from "./components/Screen2/Screen2.js";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/screen1">
          <Screen1 />
        </Route>
        <Route path="/screen2">
          <Screen2 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

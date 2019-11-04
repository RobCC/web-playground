import React from "react";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";

import { Routes } from "../Routes/Routes";

export const App = (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>

    <div>
      <Switch>
        <Routes />
      </Switch>
    </div>
  </Router>
);

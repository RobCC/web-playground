import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { Home } from "../views/Home/Home";
import { About } from "../views/About/About";

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
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
    </div>

  </Router>
);

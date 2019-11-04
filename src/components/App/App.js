import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

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
      <Routes />
    </div>
  </Router>
);

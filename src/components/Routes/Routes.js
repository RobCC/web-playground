import React from 'react';
import { Route } from "react-router-dom";

import { Home } from '../../views/Home/Home';
import { About } from '../../views/About/About';

export const Routes = () => (
  <>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/about" exact>
      <About />
    </Route>
  </>
);

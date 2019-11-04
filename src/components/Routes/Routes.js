import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, About } from '../../pages';

export const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/about" exact>
      <About />
    </Route>
  </Switch>
);

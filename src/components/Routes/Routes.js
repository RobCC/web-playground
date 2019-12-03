import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, About, Material } from '#/views';

const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/about" component={About} />
    <Route path="/material" component={Material} />
  </Switch>
);

export default Routes;

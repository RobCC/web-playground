import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

import Routes from '../Routes/Routes';
import styles from './app.scss';

const App = () => (
  <Router>
    <nav>
      <ul className={styles.menu}>
        <li>
          <NavLink to="/" exact>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/material">Material</NavLink>
        </li>
      </ul>
    </nav>

    <div>
      <Routes />
    </div>
  </Router>
);

export default App;

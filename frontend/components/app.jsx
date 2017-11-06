import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Switch,
  HashRouter
} from 'react-router-dom';


import Home from './home';

const App = () => (
  <div className="everything">
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default App;

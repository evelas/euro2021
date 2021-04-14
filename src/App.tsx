import React from 'react';
import { Home, Login, NotFound } from './pages/index';

import { Route, Switch, withRouter } from 'react-router-dom';

const App = withRouter(() => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home2" component={Home} />
      <Route path="*" component={NotFound} />

    </Switch>
  );
});

export default App
